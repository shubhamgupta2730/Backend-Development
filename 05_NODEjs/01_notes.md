- multiple libraries together forms a framework.

- node is a runtime environment for js.

- Before Node, js only runs inside browser.

## nodejs features:

- nodejs is open source
- access to file system
- access to processes
- access to streams

- frameworks such as : express, sails.

- globals: these are global objects available in js. such as process, \_\_dirname, module.

- repl : read, execute, print, loop : it is a console where we can run js, it reads the instructions and execute them immediately. node also provides repl console, and we can access it using node in terminal.

### Module pattern of Nodejs:

- suppose we have a js file which contains functions and variables, now we have to use those in another js file, so we have to export these functions. using
- module.exports (it is a js object ).

- now to access these modules in other file:

  - 1. **common js modules** (const name = require(path)), it is the old way of using modules.(by default it is enabled.)
  - 2. **ES modules** (import name from path), it gives error...
       now to use ES modules either use:

  1. .mjs extension
  2. through packages - it is a folder that contains a package.json file(contains metadata)
     "type":"module" in package.json file. it enables ES6 moduling.

  - After enabling ES6 moduling , we cannot use require method, so to use that we have to give extension, .cjs to js file.

  # common js modules: for export:

  ## DEFAULT EXPORTS: module.exports  OR export default = myfunc()
  ## NAMED EXPORTS: exports.function name

  # ES6 module exports:
  ## DEFAULT EXPORTS: export default myfunc();
