This is just another react app created with [create-react-app](https://github.com/facebook/create-react-app)

### Modifications:

* Move relevant files to `src/css`, `src/images`, `src/tests`, so there won't be a `src` folder with lots of files
* added `src/wasm`, need to [setup `emcc`](http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html)

### WebAssembly

* Glue code `public/test.js` need to be included in `script` tag in `public/index.html` manually.
* C/C++ functions exposed to `window._*`, see `src/App.js`.


### References

* http://www.reactjunkie.com/webassembly-react/
* http://kripken.github.io/emscripten-site/index.html
