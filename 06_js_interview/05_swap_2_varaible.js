//using temp variable: 

let a = 5;
let b = 10;
let temp;
temp = a;
a=b;
b=temp;
console.log(a);
console.log(b);

//without using 3rd variable:
let p = 10;
let q= 20;
p = p+q;
q=p-q;
p=p-q;
console.log(p);
console.log(q);