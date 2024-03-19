console.log(typeof(12));
console.log(typeof(12.34));
console.log(typeof(0));
console.log(typeof undefined);

//typeof null is object but it is a bug in js
console.log(typeof null);
console.log(typeof true);
console.log(typeof 'hello world');
console.log(typeof Symbol('hello'));
console.log(typeof {name: 'John', age: 30});

//typeof array is object but it is a bug in js
console.log(typeof [1, 2, 3]);
console.log(typeof function() {});

//typeof NaN is number but it is a bug in js
console.log(typeof NaN);

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof -0);
console.log(typeof 0);


console.log(typeof 0/0);
console.log(typeof 1/0);
console.log(typeof -1/0);
console.log(typeof 1);

console.log(typeof(typeof(12))); //string ("Number")
//typeof is an operator that returns the data type of the operand 
//typeof typeof() is always string


//* assignment operators:
// =, +=, -=, *=, /=, %=

let x =10;
x+=2;
x-=12;
x*=3;
x/=2;
x%=3;

console.log(x);

//if we want only floor values after division: 
//1 way: parseInt();
//2 way: Math.floor();



//* Logical Operators:

// &&, ||, !
//AND, OR, NOT
console.log((10>5) && (5>2)); //true
console.log((10>5) || (5>2)); //true
console.log(!(10>5)); //false
console.log(!(5>10)); //true
console.log(0 && 4); //0
console.log(0 || 4); //4
