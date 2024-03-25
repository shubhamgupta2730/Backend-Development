//How js handles async operations>>
//java is multithreaded. so multiple threads can be created to execute tasks in parallel.
// js is single threaded language. 
//js by default only supports asynchronous type of code .

//synchronous code, line by line execution of code: 
console.log("Start");
for(let i=0; i<1000000000; i++){
  //some task
}
console.log("Task Done");
console.log("Task End");
//the above property of sync code execution only works for operations natively known to js such as loops. 

//setTimeout is not a js function, it is in js runtime. such as browser. which contains execution environment for js such as execution js engine.  and some more features such as DOM apis, and it gives some functions to interact with dom. 

//so settimeout is timer based functions used by run time environments.

//after 2009 Node is introduced by Ryan Dahl where js can be run outside the browser.
//we cannot get apis such as file system so Node is introduced to use these apis.

//runtime also provides functionalities that can be leveraged by js. 

//?
//We can easily do tasks that takes a lot of time, to complete without blocking the code flow.


//? event loop: 
//there is web api runtime,  call stack, event loop and  event queue in memory.
//timer functions goes to the runtime and start timer and as timer finishes they moved to the event queue. 
//
//!the condition to start executing tasks from event queue is: 
//1. the call stack should be empty ie, no function in the call stack is left to be executed.
//2. the global code is also done.
//3. the task which first comes to task queue will be evaluated first.

//example: 
function process(){
  console.log("Start");
  setTimeout(function exec(){
    console.log("executed some task");
  },2000);
  for(int = i =0; i<100000000; i++){
    //some task
  }
  console.log('task end');
}

process();
console.log("finished execution");



//* how console.log works internally>>
// it is not a js function, it is a feature of runtime, 
// internally console.log uses process.stdout.write




