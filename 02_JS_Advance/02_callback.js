//A callback function is a function passed as an argument to another function.
//f(g(x))  //g(x) is a callback function.
function fun(x, fn){
  for(let i=0; i<x; i++){
    console.log(i);
  }
  fn(); //calling the callback passed.
}

fun(10, function log(){
  //this is callback function
  console.log("custom logger")
});

//arr.map(fn) here fn is the callback function.
//map: for all the elements of the given array, it passes the elements as an arguments to the call. 
//returned value is stored inside an array.
let arr1 = [1,2,3,4,5];
let x = arr1.map(function process(v,i){
  console.log(v,i);
  return v*v;
});
console.log(x);




//* custom mapper function: 
function mapper(arr, fn){
  //arr->is going to be an array of elements.
  //fn-> callback function which expects two arguments value and index. 
  let result = [];
  for(let i =0; i<arr.length(); i++){
    let res = fn(arr[i], i);
    //fn(value, index)
    //i->index, arr[i]->value
    result.push(res);
  }
  return result;
}

let arr = [1,2,3,4,5];
mapper(arr, function cuber(v,i){
  console.log(v, v*v*v, i );
  return v*v*v;
});
console.log(x, arr);

