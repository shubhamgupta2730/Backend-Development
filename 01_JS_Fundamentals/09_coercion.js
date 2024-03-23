//coercion: 
// 1. converting a value from one type to another
// 2. this happens because JS is dynamically typed language
// 3. JS is also a weakly typed language
// 4. coercion can be explicit or implicit
// 5. explicit coercion is when you convert a value from one type to another manually
// 6. implicit coercion is when JS does it for you
// 7. implicit coercion is what causes confusion and bugs in code
// 8. always use explicit coercion
// 9. use Number, String, Boolean to convert values to their respective types
// 10. use parseInt and parseFloat to convert values to numbers


//? everything in js is object: it is a false statement
// primitive values are not objects in js.

//* How js handles coercions?
// ecmascript implicitly converts values to the type it needs to perform an operation, and uses abstract operations to do so.
// abstract operations are done by the ecmascript engine, and are not accessible to developers.
//! first abstract operation: ToPrimitive:
// 1. it converts a value to a primitive value( a non-object)
// toPrimitive abstract operation, takes an input argument and an optional preferred type argument.

//if an argument is capable of getting converted into more than one type, then it will be converted into the preferred type.
// if the preferred type is not specified, then it will be converted into the default type.
// if the preferred type is number, then the argument will be converted into a number.
// if the preferred type is string, then the argument will be converted into a string.
//Example:
//in case of subtraction operator, the preferred type is number.
// 1-'1' = 0 //string is converted into number

//in case of addition operator, the preferred type is string.
//example: //string can be either left or right side of the operator
// 1+'1' = '11' //number is converted into string.

//? ToPrimitive abstract operation:
//if hint/ preferred type is number, then on input argument we call valueof() function to get a number, and if it dosen't gives a number, then we call toString() function. otherwise, hint argument is String then we first call toString() and then valueOf() function.

/*
hint-> number: valueOf() -> toString()
hint-> string: toString() -> valueOf()
*/

//for an example:
/*
both are string: 
string + string = concatenation of strings
"undefined" + "1 "= "undefined1"

one of them is string: 
string + number = string
"undefined" + 1 = "undefined1"

if none of them is string: 
number + number = addition of numbers
undefined + 1 = NaN
*/
//NaN is the invalid number that is not defined.
//console.log("undefined" + undefined) //undefinedundefined
//console.log("undefined" + null) //undefinednull
//console.log("undefined" -" undefined"); //NaN
console.log('a' - 'b') //NaN

//? In multiplication operator, if any one operation is NaN then output will be NaN.
//infinity * 0 is NaN.
//undefined converts to NaN.
//null converts to 0.
console.log(true - 8) // -7
console.log('true' - 8); //NaN


//* toNumber operation:
//  "" -> 0;
//  " " -> 0;
// "0" -> 0;
//"." -> NaN;
//"0." -> 0;
//".0" -> 0;
//".0." -> NaN;
//"0.0" -> 0;
//".0.0" -> NaN;
//"0.0.0" -> NaN;
//"12+3" -> NaN;
//"12-3" -> NaN;
//"12*3" -> NaN;
//"12/3" -> NaN;
//"12%" -> NaN;
//when array converts to number: 
//[] -> 0;
//[null] -> 0;
//[undefined] -> 0;
//["0"] -> 0;
//[1, 2, 2] -> NaN;

//valueof() is not an abstract operation, so we can use it.
10 - { "a": 10, valueof() { return 8; } } //2 why? because valueof() function is called and it returns 8. so, 10-8 = 2. 

//10.toString() //error why:? because 10 is a number and it dosen't have a toString() method.



//? Type interconversion: coercion
//implicit and explicit coercion.
//js handles most cases implicitly.

//js operations: js internally use them.
//ToString
//ToNumber
//ToBoolean
//ToPrimitive

console.log('abcd'-1); //NaN
console.log('0xabcd'-1); //43981 //hexadecimal number

//* ToString operation: 
//null ->"null"
//undefined -> 'undefined'
//true -> 'true'
//false -> 'false'
//0 ->'0'
//[] -> ''
//[1,2,3] -> "1,2, 3"


//* ToPrimitive operation: 
//takes input argument and converts it into non object type(primitive type).' 


