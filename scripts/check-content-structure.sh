#!/usr/bin/env bash
set -euo pipefail

content_root=${1:-content/notes}
missing=0

while IFS= read -r -d '' directory; do
  if [[ -f "$directory/_index.md" || -f "$directory/index.md" ]]; then
    continue
  fi

  printf 'Missing _index.md or index.md: %s\n' "$directory" >&2
  missing=1
done < <(find "$content_root" -type d -print0 | sort -z)

if [[ $missing -ne 0 ]]; then
  exit 1
fi

printf 'Content structure is complete under %s.\n' "$content_root"
