//loops : 
let num = 4;
if (num == 0 || num === 1) {
  console.log('factorial is 1');
} else {
  var fact = 1;
  for (let i = 1; i < num; i++) {
    fact = num * i;
  }
  console.log(fact)
}

//recursion: 
var num1 = 4;
function factorial(num1) {
  if (num1 == 0 || num1 == 1) {
    return 1;
  } else {
    return num1 * factorial(num1 - 1);
  }
}

const result = factorial(num1);
console.log(result);