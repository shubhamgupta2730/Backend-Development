//fibonacci series:
// 0 1 1 2 3 5 8 13

let num1 = 0;
let num2 = 1;
let n =10;
console.log(num1)
console.log(num2)
for(let i =0; i<n; i++){
  let num3 = num1+num2;
  num1 = num2;
  num2 = num3;
  console.log(num3)
}
