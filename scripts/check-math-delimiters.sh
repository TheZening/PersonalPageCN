#!/usr/bin/env bash
set -euo pipefail

content_root=${1:-content/notes}

if rg -n '\\\(|\\\)' "$content_root" -g '*.md'; then
  printf 'Legacy inline math delimiters found. Use $...$ for inline math.\n' >&2
  exit 1
fi

printf 'Inline math delimiters use $...$ under %s.\n' "$content_root"
