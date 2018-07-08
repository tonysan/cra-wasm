#!/bin/bash
source ~/git_repo/emsdk/emsdk_env.sh

# c
# emcc ./test.c -s WASM=1 -o ../../public/test.js

# cpp, need to list exposed functions and prepend with "_"
emcc ./test.cpp -s WASM=1 \
    -s EXPORTED_FUNCTIONS='["_foo", "_bar", "_baz"]' \
    -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
    -o ../../public/test.js
