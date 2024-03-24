// NaN stands for not a number
//it dosen't actually mean not a number, rather it guess notion of an invalid number.
//NaN ===NaN returns false, it checks on any operand if there is NaN , if donsent check for another operand , and returns false.

console.log(1 / 0); //infinity

//to check if a value is NaN or not: 
let a = '10';
let b = 'abc';
let c = 'sanket';
let d = 10 - c;
console.log(isNaN(a));
console.log(isNaN(b));

console.log(isNaN(c));
console.log(isNaN(d));

//! isNaN function has some issues< 
// this isNaN function coerses the argument before checking for NaN, now string is Not NaN ,, but when we convert 'abc' to a number  it  become NaN and hence isNaN returns true.
let x = NaN;
console.log(typeof (x) == 'number' && isNaN(x) ? "NaN value" : 'not a NaN value');

console.log(Number.isNaN('abc'));
console.log(Number.isNaN('124'));
console.log(isNaN(4));
console.log(Number.isNaN("a"));
console.log(isNaN(!(NaN)))


// console.log() is not a part of javaScript, it is a part of run time environment.


//?Boxing in Js: 
//when we convert primitive value of a object.
//example: 
let p = 6;
console.log(typeof (p));
let s = p.toString();
console.log(s);
console.log(typeof (s));


// isNaN(): This function first tries to convert the value to a number and then checks if the result is NaN. This means that non-numeric values like strings or objects will be converted to numbers first, which can lead to unexpected results. For example, isNaN("hello") will return true because "hello" is not a number.

//Number.isNaN(): This function does not try to convert the value to a number. It only returns true if the value is already NaN. This means that it will return false for non-numeric values that are not NaN. For example, Number.isNaN("hello") will return false because "hello" is not NaN.