This is just another react app created with [create-react-app](https://github.com/facebook/create-react-app)

### Get started
* Setup [setup `emcc`](http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html)
* Clone this repo
  * If you prefer start from scratch, `npx create-react-app foobar && cd foobar`
* Write some C/C++ code `test.c`
* [Compile above code to .js and .wasm](https://github.com/tonysan/cra-wasm/blob/master/src/wasm/build.sh)
  * point the `source` to the path you setup `emcc` git repo.
  * For C++, you need to enumerate the functions, *prepended with _*, in the `emcc` compile command.
* Move `test.js` and `test.wasm` to `/public`
* Add a `script` tag pointing to the compiled `test.js`
* Done, now you can bind your React component with wasm functions [like this](https://github.com/tonysan/cra-wasm/blob/master/src/App.js#L14).

### Modifications:

* Move relevant files to `src/css`, `src/images`, `src/tests`, so there won't be a `src` folder with lots of files
* added `src/wasm`, need to [setup `emcc`](http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html)

### WebAssembly

* Glue code `public/test.js` need to be included in `script` tag in `public/index.html` manually.
* C/C++ functions exposed to `window._*`, see `src/App.js`.

### References

* http://www.reactjunkie.com/webassembly-react/
* http://kripken.github.io/emscripten-site/index.html
