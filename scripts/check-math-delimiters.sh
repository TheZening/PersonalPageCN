#!/usr/bin/env bash
set -euo pipefail

content_root=${1:-content/notes}

if rg -n '\\\(|\\\)' "$content_root" -g '*.md'; then
  printf 'Legacy inline math delimiters found. Use $...$ for inline math.\n' >&2
  exit 1
fi

if rg -n '\\\[|\\\]' "$content_root" -g '*.md'; then
  printf 'Legacy display math delimiters found. Use standalone $$ lines.\n' >&2
  exit 1
fi

display_errors=0
while IFS=: read -r file line text; do
  normalized=$(printf '%s' "$text" | sed -E 's/^[[:space:]]*//; s/^(>[[:space:]]*)+//; s/^[[:space:]]*//')
  if [[ "$normalized" != '$$' ]]; then
    printf '%s:%s: display delimiter must be on its own line\n' "$file" "$line" >&2
    display_errors=1
  fi
done < <(rg -n '\$\$' "$content_root" -g '*.md')

if [[ $display_errors -ne 0 ]]; then
  exit 1
fi

printf 'Math delimiters are normalized under %s.\n' "$content_root"
