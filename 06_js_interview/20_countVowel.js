//regex : regular expression.

//it is used to match , test and find characters from a string. 

//! ig: global and case insensitive.

var str = 'hello';
var reg = /[aeiou]/gi;
var count = str.match(reg);
console.log(count)
console.log(count.length)