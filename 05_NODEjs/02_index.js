// #!/usr/bin/env node
//we can run c++ or any other file using ./run or filename, ie, executable file, and we cant do that in nodejs, so to make js file executable we have to use shebang.
//we have to write shebang in the top of the file.
//now we can run this file using ./index.js
//for that we have to first give permission to this file: chmod 777 index.js in terminal. 
//* we are doing this to execute nodejs scripts, so that we can pass command line arguments on it.These arguments are accessible within the script through the process.argv array
// The first element (process.argv[0]) is the path to the Node.js executable.
// The second element (process.argv[1]) is the path to the script being executed.
// Any additional elements contain the command-line arguments passed to the script.
console.log('hello world');

// console.log(process.argv);

//?to pass arguments through command line: 
// ./index.js --name=shubham --company=skit

//?to access particular argument: 
// cons.log(process.argv[2].split('=')[1]);


//! internally console.log() uses process.stdout.write() to print on console.
process.stdout.write('hello');


//* Streams:
//streams are objects that allow you to read data from a source or write data to a destination continuously.

// Readable Streams: Readable streams allow you to read data from a source, such as a file, HTTP request, or standard input (stdin).

// Writable Streams: Writable streams allow you to write data to a destination, such as a file, HTTP response, or standard output (stdout).

// Duplex Streams: Duplex streams represent streams that are both readable and writable, meaning you can both read from them and write to them. An example of a duplex stream is a TCP socket.

// Transform Streams: Transform streams are a type of duplex stream where the output is computed based on the input. They allow you to modify or transform the data as it is being read or written.


//* packages:

// a package refers to a collection of files and directories that are organized together as a reusable unit of software.

// There are two main types of packages in Node.js:

// Core Modules: These are built-in modules that come bundled with Node.js itself. They provide basic functionalities like file system operations (fs), networking (http, https), and utilities (util).

// Third-party Modules: These are packages created by the Node.js community and made available through the Node Package Manager (npm) registry or other package registries like yarn or GitHub Packages. They extend the functionality of Node.js by providing additional features and libraries for various purposes. Examples include Express.js for building web applications, lodash for utility functions, and mongoose for working with MongoDB databases.

//?we have libraries in frameworks, which is reusable code we can use in  our code. These libraries in nodejs is known as packages.

//so to use these packages, we have package managers, in python, pip is there.
//? in nodejs, npm or yarn is there.
//* npx package is part of npm .
//there are so many packages available in npm , which makes nodejs better from others, we can use these packages in our code.

//axios package is there through which we can make http requests.


//?  fs module:
//The fs module in Node.js is a core module that provides an API for interacting with the file system. It allows you to perform various operations on files and directories, such as reading from and writing to files, creating and deleting files and directories, and modifying file permissions.

// File System Operations:

// fs.readFile(): Reads the contents of a file asynchronously.
// fs.readFileSync(): Reads the contents of a file synchronously.
// fs.writeFile(): Writes data to a file asynchronously.
// fs.writeFileSync(): Writes data to a file synchronously.
// fs.appendFile(): Appends data to a file asynchronously.
// fs.appendFileSync(): Appends data to a file synchronously.
// fs.unlink(): Deletes a file asynchronously.
// fs.unlinkSync(): Deletes a file synchronously.

