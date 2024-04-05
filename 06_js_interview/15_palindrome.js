//when number equal to its reverse.

var  str = 'hello world';
var response = str.split('').reverse().join('');

//split(''): splits the string into array.
console.log(response)
if(str == response){
  console.log('it is palindrome')
}else{
  console.log('it is not a palindrome')
}