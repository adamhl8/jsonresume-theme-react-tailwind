#!/bin/sh

echo "Building theme..."
bun tsdown >/dev/null

# resumed imports the theme relative to its own module, so pass an absolute path
bun resumed render resume.json -t "$PWD/dist/index.js"
