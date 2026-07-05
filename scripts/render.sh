#!/bin/sh

echo "Building theme..."
nubx tsdown >/dev/null

# resumed imports the theme relative to its own module, so pass an absolute path
nubx resumed render resume.json -t "$PWD/dist/index.js"
