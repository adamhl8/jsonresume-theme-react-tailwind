import "node_modules/@adamhl8/configs/dist/configs/justfile.base.just"

refresh-schema:
    bun refresh-schema.ts

build: refresh-schema _build

render:
    ./scripts/render.sh

watch:
    ./scripts/watch.sh
