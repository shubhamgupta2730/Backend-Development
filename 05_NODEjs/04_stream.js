//there is stream package in nodejs which handles operations related to streams

//process.stdout: we get access to output stream
//process.stdout.write('Hello World\n');
//process.stdin: we get access to input stream

const fs = require('fs');
const transformStream = require('stream');
//to read input chunk by chunk, we use transform stream
let fileStream = fs.createReadStream(__dirname + "/05_input.txt");
let outputStream = process.stdout;

let middleStream = new transformStream.Transform({
  transform(chunk, encoding, next){
    let modifiedChunk = chunk.toString().toUpperCase();
    this.push(modifiedChunk);
    setTimeout(next, 1000);
  }
})
//fileStream.pipe(outputStream);
let newReadableStream = fileStream.pipe(middleStream);
newReadableStream.pipe(outputStream);
//readStream.pipe(writeStream) is a shorthand for the above code.
//It reads data from readStream and writes it to writeStream.
