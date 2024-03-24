// Scopes is simply where to look for things.
// things such as : variables and functions.

//we have 3 types of scopes in js: 
// global, function and block.

//?Global Scope: 
//if a variable is present in global scope then it is accessible everywhere in js file.
///how to define global scope - to declare / define variables outside any functions.

var name = 'shubham'
function greet() {
  console.log("greetings: ", name);
}

function fun() {
  console.log("have fun", name);
}

greet();
fun();



//? function scope: 
// in function scope the visibility of function or variable is just inside the outer function.
var name = 'shubham';
function fun1() {
  console.log('fun1', name);
  var test = "inside fun called";
  function insidefun() {
    console.log("Inside fun called", test);
  }
  insidefun();
}
fun1();

//? black scope: 
// In js , a pair of curly braces is used to declare a block.
// Now variable or function is accessible or visible inside a block then it will have block scope.

if (true) {
  let x = 10;
  console.log(x);  // inside the block
}
//console.log(x) // not accessible outside the block.

//! let , var, const

// var: whenever var is used anywhere inside a function, the varaible gets functions scope. 

//example: 
function fun2() {
  console.log("used before declarations:", x);  //x will give undefined. here , see it in lexical scopes.
  var x = 10;
  console.log(x);
}
fun2();

//if we use it outside a function, no matter if it is enclosed in a block or not, it will give the variable global scope.

//let: whenever we initialize a variable with let, it always gets the scope of enclosing block.
{
  //console.log(x);  // not accessible before declaration of variable inside scope also.
  let x = 10;
  console.log(x);
}
//console.log(x);   // x not accessible.

//* var allows us to redeclare a variable.
//* let does not allow us to redeclare a variable.

//example: 
var f = 9;
var f = 10;
let h = 10;
//let h=12; redeclaration not allowed.

// if we declare outside any block then it does not get complete global scope. means we cannot use let in global scope before declaration while we can use var before declaration. 


//* const 
// const are blocked scope , but the value of const variable remains constant , and cannot be reassigned and scope is same as let - block scope. the only difference is , it does not allow reassignment.

//? how js parses the code.
// we know that js is not interpreted and it is hybrid ie, compiled+ interpreted, so whenever we try to execute js code, js first parses the whole code, in this parsing phase, it assigns scopes to variables/functions. once done, it reads the code and execute it.

// so steps in code parsing in js is: 
// 1. parsing + scope resolution
// 2. execution.

//? every variable in code will be used in one of the following ways; 

// 1. either ti will be getting a value assigned ie. it is used as a target
// example: x =10

//2. it will be used to retrieve a a value  ie. it will be used as a source.
// example: y=10+x;

//? whenever we declare a variable using let/var/const , it is a formal declaration. or initializing a function is also a formal declaration. 

//* autoglobals: in js if we keep an scope of variable in outer scope, and no where find it, we automatically consider it in global scope.

//!undefined vs undeclared: 
// undefined is a variable state when the scopes already know about it, but in the execution phase we have not allocated it a value.
//so when a variable is declared in var or let or const , and we use it before declaration, then it shows undefined. 
//
//undeclared is a variable stats when we never formally declare a variable.
//means we are not using var/let/const while declaring a variable , so when we use that variable before the declaration, then it throws error, that it is not able to find the variable , in function as well as global scope


//? Hoisting 
// Hoisting is direct consequence of lexical parsing that happens in js, due to which we are able to access some function and variables before declaring them. which gives the notion that they are moved up in the file . 

//? autoglobals: 
function fun3() {
  teachAssistant = "abcd";     // autoglobal, as it is not a formal declaration. 
  console.log(teachAssistant);
}
fun3();
//to avoid autoGlobal declarations in code, we can use strict mode.
//* "use strict" //for using the strict mode in js. 


function fun4() {
  "use strict";
  teachAssistant = "abcd";     // autoglobal, as it is not a formal declaration. 
  console.log(teachAssistant);
}

fun4(); // now this will give error, and not able to execute autoglobal variables. 


//? IIFE - immediately involved function expression

//* function expression -
//when a declared function does not starts with keyword function written , then it is function expression.
//when a function is declared and assigned to a variable.

//we can pass function as an argument to another function.
//function expressions are of 2 types : 1) anonymous , 2) named

//1) anonymous: 
/*
var x = function gun (){  //here gun function scope is inside the scope of x, not global scope
  implementation
}
gun(function(){
  implementation
});
*/
//above code is not of good quality. 
//because without the  name of the function we cant predict the working of the function, so this anonymous functions are not good for readability.

// console.trace(); is used to trace the function details or function call.