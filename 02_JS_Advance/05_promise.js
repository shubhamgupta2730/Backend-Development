// Promises are special js objects that are also considered readability enhancers.  they get immediately returned from a function setup to return a promise.

// they act as placeholder for the data we hope to get back from some future task.

//we also attach the functionality we want to deger until the future task is done. and promise automatically handle functionality.

//So promise do two things, one inside js and one outside js.
//
//1. it signs up the process and required to run in the runtime  and gives a placeholder in js which has a value property.

//!learn 
//how to create a promise.
//how to consume a promise.


//* task : 
//1. write a function to download data from url.
//2. write a function to save that downloaded data in a file and return that file.
//3. write a function to upload the file written in previous step to a new url.

//?this function uses callbacks to execute the tasks: 
function fetchCustom2(url, fn) {
  //download content of url.
  //this downloading can take some time.
  //we will download content from url , and then whatever is the result, we will pass to the callback.
  console.log("Started downloading...");
  setTimeout(function process() {
    console.log('Download completed');
    let response = "Dummy data";
    console.log(response);
    fn(response);
    console.log("ending the downloading function...");
  }, 3000);
};

function writefile(data, fn) {
  console.log("Started writing data...");
  setTimeout(function process() {
    console.log("Writing completed");
    let filename = 'output.txt';
    fn(filename);
    console.log("writing ended...");
  }, 5000)
}

function uploadFile(filename, newurl, fn) {
  console.log('upload started...');
  setTimeout(function process() {
    console.log("File", filename, "uploaded successfully");
    let uploadResponse = 'success';
    fn(uploadResponse);
    console.log('upload ended...');

  }, 11000)
}

// fetchCustom2("www.google.com", function downloadCallBack(response){
//   console.log("Downloaded response is : ", response);
//   writefile(response, function writeCallback(filename){
//     console.log('new file written is : ', filename);
//     uploadFile(filename, 'www.drive.google.com', function uploadcallback(uploadResponse){
//       console.log('successfully uploaded', uploadResponse);
//     })
//   })
// });

//above program has callback hell.
//now we have to make this code easy..


//The promise object we create , has 4 major properties: 
//1. status
//2. value
//3. onFulfillment
//4.onReject

//?Status: 
//status shows current promise status
//1. pending state  --> current or initial
//2. fulfilled state  --> success 
//3. Rejected state  --> failure

//?value: 
//when status of the promise is pending, this value property is undefined. The moment promise is resolved the value property is updated from undefined to new value(this value we can consider as the returned value/resolved value.). So the value property   acts like a placeholder till the time promise finishes.

//?onFulfillment: 
//this is an array, which contains functions that we attach to our promise object. (To a promise object we can attach some function using .then() method. when the value property is updated from undefined, to the new value, js gives chance to these attached functions one by one with the value property as their argument (if there is no piece of code in the call stack and global state))


//how can we write a function to download some date from a url, and not using callbacks.
//using promises.

//to crete a promise, call the promise constructor.
//the promise constructor takes a callback as an argument.
//the callback passed inside constructor, expects arguments: resolve, reject.
//then inside the callback , write the logic. 
//if you want to return something on success, then call resolve function, with whatever value you want to return . 
function fetch(url) {
  return new Promise(function (resolve, reject) {
    console.log("Starting fetching from ", url);
    setTimeout(function process() {
      let data = "dummy data";
      console.log("completed fetching the data");
      resolve(data);  //return some data on success
    }, 4000)
  });
}


function demo1() {
  return new Promise(function (resolve, reject) {
    console.log("hi");
    setTimeout(function process() {
      console.log('taks done');
      resolve("Students are best")
    }, 3000)
  })
}
// demo1();

//?when does we consider a promise is fulfilled?
//if we call resolve() function, we consider it fulfilled.
//if we call reject() function, we consider it rejected.

function demo2(x) {
  return new Promise(function (resolve, reject) {
    console.log('start');
    setTimeout(function process() {
      console.log('completed timer');
      if (x % 2 == 0) {
        resolve('even');

      }
      else {
        reject('odd');
      }
    }, 3000);
    console.log('somewhere');
  })
}

// a = demo2(4);
// console.log("a=", a);

function demo3(url){
  return new Promise(function(resolve, reject){
    console.log('Starting download');
    setTimeout(function process(){
      let data = 'downloaded dummy data';
      console.log('Download completed');
      resolve(data);
    }, 1000);
    console.log('timer to mimic download started');
  });
}

// console.log('starting the program');
// console.log('we are expecting to mimic download');
// x = demo3('www.google.com');
// console.log('new promise object created successfully, but downloading still going on');


//?performing task for taking data from url, and writing into a file and uploading to a new url.
function fetchData2(url){
  return new Promise(function(resolve, reject){
    console.log('started downloading from ', url);
    setTimeout(function processDownloading(){
      let data = 'dummy data';
      console.log('download complete');
      resolve(data);
    }, 3000);
  })
};

function writefile(data){
  return new Promise(function(resolve, reject){
    console.log('started writing', data, 'in a file');
    setTimeout(function processWriting(){
      let filename  = 'result.txt';
      console.log('file written successfully');
      resolve(filename);
    }, 4000)
  })
};

function uploadData(data, url){
  return new Promise(function(resolve, reject){
    console.log('started uploading data to  url: ', url );
    setTimeout(function processUpload(){
      let result = 'success';
      console.log('uploading done');
      resolve(result);
    },5000)
  })
}


//?consuming  a promise: 
//promise consumption is a main beauty, using which we will avoid inversion of control. Whenever we call a function, returning a promise, we will get a promise object which is like any js object that we can store in a variable. 

// let data  = fetchData2('www.google.com');
// //now response will store the promise object. 
// let filename = writefile(data);
// let response = uploadData(filename, 'www.drvie.google.com');

//!will js wait here for promise to be resolved if it involves any async piece of code????
// If creation of promise involves sync piece of code, it will wait, otherwise not.

//* we can use .then() function on promise object to bind the function we want to execute once we fulfill a promise.
//the .then() function takes function as an argument that we want to execute after promise fulfills, and the argument function takes value property as parameter.

let downloadPromise = fetchData2('www.google.com');
downloadPromise.then(function processDownload(value){
  console.log('download promise fulfilled');
  let writePromise = writefile(value);
  writePromise.then(function processWrite(value){
    console.log('writing of file completed');
    console.log(value)
  })
});

//there is also promise  hell in this as same in callback function, but here , there in no inversion of control, because as resolve() is executed , it can execute only once, we cannot write it multiple times as in callbacks we can create multiple functions. so it is better.and solving the problem of inversion of control.

let downloadPromise = fetchData2('www.google.com');
downloadPromise
.then(function processDownload(value){
  console.log('downloading with following value: ', value);
  return value;
})
.then(function processWrite(value){
  return writefile(value);
})
.then(function processUpload(value){
  return uploadData(value, 'www.drive.google.com');

})
.then(function process(){
  console.log('done');
})

//* microtask queue: promise based 