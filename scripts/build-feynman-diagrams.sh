#!/usr/bin/env bash
set -euo pipefail

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
repo_root=$(cd -- "$script_dir/.." && pwd)
source_root="$repo_root/assets/feynman-src"
output_root="$repo_root/assets/feynman"

mode=build
force=0
declare -a requested_targets=()

usage() {
  cat <<'EOF'
Usage: scripts/build-feynman-diagrams.sh [--check] [--force] [diagram ...]

Build TikZ-Feynman sources from assets/feynman-src into web-ready SVG files
under assets/feynman. Diagram arguments are paths relative to the source root;
the .tex extension is optional.

Options:
  --check  Verify that every generated SVG matches its source without TeX.
  --force  Rebuild diagrams even when their embedded source hash is current.
  -h, --help  Show this help text.
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --check)
      mode=check
      ;;
    --force)
      force=1
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    --)
      shift
      while [[ $# -gt 0 ]]; do
        requested_targets+=("$1")
        shift
      done
      break
      ;;
    -*)
      printf 'Unknown option: %s\n' "$1" >&2
      usage >&2
      exit 2
      ;;
    *)
      requested_targets+=("$1")
      ;;
  esac
  shift
done

if [[ $mode == check && $force -eq 1 ]]; then
  printf '%s\n' '--force cannot be combined with --check.' >&2
  exit 2
fi

hash_file() {
  local file=$1
  if command -v shasum >/dev/null 2>&1; then
    shasum -a 256 "$file" | awk '{print $1}'
  elif command -v sha256sum >/dev/null 2>&1; then
    sha256sum "$file" | awk '{print $1}'
  else
    printf '%s\n' 'A SHA-256 utility (shasum or sha256sum) is required.' >&2
    return 1
  fi
}

resolve_target() {
  local target=$1
  target=${target%.tex}
  if [[ ! $target =~ ^[a-z0-9][a-z0-9_-]*(/[a-z0-9][a-z0-9_-]*)*$ ]]; then
    printf 'Invalid diagram name: %s\n' "$target" >&2
    return 1
  fi
  printf '%s/%s.tex\n' "$source_root" "$target"
}

declare -a sources=()
if [[ ${#requested_targets[@]} -eq 0 ]]; then
  if [[ -d $source_root ]]; then
    while IFS= read -r -d '' source; do
      sources+=("$source")
    done < <(find "$source_root" -type f -name '*.tex' -print0 | sort -z)
  fi
else
  for target in "${requested_targets[@]}"; do
    source=$(resolve_target "$target")
    if [[ ! -f $source ]]; then
      printf 'Feynman diagram source not found: %s\n' "$source" >&2
      exit 1
    fi
    sources+=("$source")
  done
fi

if [[ ${#sources[@]} -eq 0 ]]; then
  printf 'No TikZ-Feynman sources found under %s.\n' "$source_root" >&2
  exit 1
fi

source_root_physical=$(cd -- "$source_root" && pwd -P)
for source in "${sources[@]}"; do
  relative=${source#"$source_root"/}
  logical_name=${relative%.tex}
  if [[ ! $logical_name =~ ^[a-z0-9][a-z0-9_-]*(/[a-z0-9][a-z0-9_-]*)*$ ]]; then
    printf 'Invalid diagram source name: %s\n' "$relative" >&2
    exit 1
  fi
  if [[ -L $source ]]; then
    printf 'Diagram sources cannot be symbolic links: %s\n' "$relative" >&2
    exit 1
  fi
  source_parent_physical=$(cd -- "$(dirname -- "$source")" && pwd -P)
  if [[ $source_parent_physical != "$source_root_physical" && $source_parent_physical != "$source_root_physical/"* ]]; then
    printf 'Diagram source resolves outside assets/feynman-src: %s\n' "$relative" >&2
    exit 1
  fi
  if grep -Eq '\\(input|include|includegraphics)([[:space:]]|\{|$)' "$source"; then
    printf 'Diagram sources must be self-contained (no input/include/includegraphics): %s\n' "$relative" >&2
    exit 1
  fi
done

generator_hash=$(hash_file "$script_dir/build-feynman-diagrams.sh")

expected_marker() {
  local source=$1
  local source_hash
  source_hash=$(hash_file "$source")
  printf '<!-- feynman-generator-sha256=%s source-sha256=%s -->' "$generator_hash" "$source_hash"
}

output_for_source() {
  local source=$1
  local relative=${source#"$source_root"/}
  printf '%s/%s.svg\n' "$output_root" "${relative%.tex}"
}

hash_sidecar_for_output() {
  local output=$1
  printf '%s.sha256\n' "$output"
}

output_hash_is_current() {
  local output=$1
  local sidecar
  local recorded_hash
  local actual_hash
  sidecar=$(hash_sidecar_for_output "$output")
  [[ -f $sidecar ]] || return 1
  IFS= read -r recorded_hash <"$sidecar" || return 1
  [[ $recorded_hash =~ ^[0-9a-f]{64}$ ]] || return 1
  actual_hash=$(hash_file "$output")
  [[ $recorded_hash == "$actual_hash" ]]
}

is_current() {
  local source=$1
  local output=$2
  local marker
  [[ -f $output ]] || return 1
  marker=$(expected_marker "$source")
  grep -Fqx "$marker" "$output" && output_hash_is_current "$output"
}

validate_svg() {
  local output=$1
  grep -q '<svg' "$output" || return 1
  grep -q '</svg>' "$output" || return 1
  grep -q 'viewBox=' "$output" || return 1
  if grep -Eiq '<(script|foreignObject|image)([[:space:]>])|on[a-z]+[[:space:]]*=|javascript:|url\((https?:|//|data:)' "$output"; then
    return 1
  fi
  if grep -Eiq "(xlink:)?href=[\"'](https?:|//|data:|javascript:)" "$output"; then
    return 1
  fi
}

if [[ $mode == check ]]; then
  check_failed=0
  for source in "${sources[@]}"; do
    output=$(output_for_source "$source")
    if [[ ! -f $output ]]; then
      printf 'Missing generated Feynman diagram: %s\n' "${output#"$repo_root"/}" >&2
      check_failed=1
    elif ! is_current "$source" "$output"; then
      printf 'Stale generated Feynman diagram: %s\n' "${output#"$repo_root"/}" >&2
      check_failed=1
    elif ! validate_svg "$output"; then
      printf 'Invalid generated Feynman diagram: %s\n' "${output#"$repo_root"/}" >&2
      check_failed=1
    fi
  done

  if [[ ${#requested_targets[@]} -eq 0 && -d $output_root ]]; then
    while IFS= read -r -d '' output; do
      relative=${output#"$output_root"/}
      source="$source_root/${relative%.svg}.tex"
      if [[ ! -f $source ]]; then
        printf 'Generated Feynman diagram has no source: %s\n' "${output#"$repo_root"/}" >&2
        check_failed=1
      fi
    done < <(find "$output_root" -type f -name '*.svg' -print0 | sort -z)

    while IFS= read -r -d '' sidecar; do
      output=${sidecar%.sha256}
      if [[ ! -f $output ]]; then
        printf 'Feynman diagram hash has no SVG: %s\n' "${sidecar#"$repo_root"/}" >&2
        check_failed=1
      fi
    done < <(find "$output_root" -type f -name '*.svg.sha256' -print0 | sort -z)
  fi

  if [[ $check_failed -ne 0 ]]; then
    exit 1
  fi

  printf 'Feynman diagrams are current (%d checked).\n' "${#sources[@]}"
  exit 0
fi

for command_name in lualatex dvisvgm; do
  if ! command -v "$command_name" >/dev/null 2>&1; then
    printf 'Required command not found: %s\n' "$command_name" >&2
    exit 1
  fi
done

temp_root=$(mktemp -d "/tmp/feynman-diagrams.XXXXXX")
trap 'rm -rf -- "$temp_root"' EXIT

if [[ -L $output_root ]]; then
  printf 'Feynman diagram output root cannot be a symbolic link: %s\n' "$output_root" >&2
  exit 1
fi
mkdir -p "$output_root"
output_root_physical=$(cd -- "$output_root" && pwd -P)

built=0
skipped=0
index=0
for source in "${sources[@]}"; do
  output=$(output_for_source "$source")
  relative=${source#"$source_root"/}

  if [[ $force -eq 0 ]] && is_current "$source" "$output"; then
    printf 'Current: %s\n' "$relative"
    skipped=$((skipped + 1))
    continue
  fi

  index=$((index + 1))
  work_dir="$temp_root/$index"
  mkdir -p "$work_dir" "$(dirname -- "$output")"
  output_parent_physical=$(cd -- "$(dirname -- "$output")" && pwd -P)
  if [[ $output_parent_physical != "$output_root_physical" && $output_parent_physical != "$output_root_physical/"* ]]; then
    printf 'Diagram output resolves outside assets/feynman: %s\n' "$relative" >&2
    exit 1
  fi

  printf 'Building: %s\n' "$relative"
  if ! (
    cd -- "$temp_root"
    mkdir -p cache-local
    TEXMFCACHE=./cache-local \
    TEXMFVAR=./cache-local \
    TEXINPUTS="$(dirname -- "$source")//:" \
    lualatex \
      --output-format=dvi \
      --no-shell-escape \
      --interaction=nonstopmode \
      --halt-on-error \
      --file-line-error \
      --output-directory="$work_dir" \
      --jobname=diagram \
      "$source"
  ) >"$work_dir/lualatex.out" 2>&1; then
    cat "$work_dir/lualatex.out" >&2
    exit 1
  fi

  if ! dvisvgm \
    --page=1 \
    --bbox=min \
    --exact-bbox \
    --precision=3 \
    --no-fonts \
    --output="$work_dir/diagram.svg" \
    "$work_dir/diagram.dvi" >"$work_dir/dvisvgm.out" 2>&1; then
    cat "$work_dir/dvisvgm.out" >&2
    exit 1
  fi

  if grep -Eq 'specials ignored|PostScript specials is disabled' "$work_dir/dvisvgm.out"; then
    cat "$work_dir/dvisvgm.out" >&2
    printf 'SVG conversion ignored drawing commands for %s.\n' "$relative" >&2
    exit 1
  fi

  marker=$(expected_marker "$source")
  temp_output="$work_dir/final.svg"
  {
    IFS= read -r first_line || true
    printf '%s\n' "$first_line"
    printf '%s\n' "$marker"
    cat
  } <"$work_dir/diagram.svg" >"$temp_output"

  if ! validate_svg "$temp_output"; then
    printf 'SVG conversion produced an invalid or unsafe SVG for %s.\n' "$relative" >&2
    exit 1
  fi

  destination_temp=$(mktemp "$(dirname -- "$output")/.feynman-svg.XXXXXX")
  cp -- "$temp_output" "$destination_temp"
  mv -- "$destination_temp" "$output"
  sidecar=$(hash_sidecar_for_output "$output")
  sidecar_temp=$(mktemp "$(dirname -- "$sidecar")/.feynman-hash.XXXXXX")
  hash_file "$output" >"$sidecar_temp"
  mv -- "$sidecar_temp" "$sidecar"
  built=$((built + 1))
done

printf 'Feynman diagram build complete: %d built, %d already current.\n' "$built" "$skipped"
