//setTimeout()
//setInterval()
//these two functions are not by default given by javaScript, then how can we use it?

//setTimeout() is a function that helps us to execute some task after a certain timer.
//setInterval() is a function that helps us to execute some task again and again after a given interval.

//setTimeout(taskCallback, timeInMilliSeconds);
//example:
setTimeout(function execute(){
  console.log('hello');
},4000)
//setTimeout and setInterval : both returns a unique id when executed.

// setInterval(function() {
//   console.log("task done again")
// },3000);

// to stop setInterval function , clearTimeout or clearInterval  is used.

