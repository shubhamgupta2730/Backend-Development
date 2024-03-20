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

//* comparison operators:
// ==, ===, !=, !==, >, <, >=, <=
// == ABSOLUTE EQUALITY
// === STRICT EQUALITY
//,  != ABSOLUTE INEQUALITY

//* String based operator: 

//concatenate operator (+)
console.log('hello' + 'world');
console.log(5+5+'5')

//* BITWISE OPERATORS:
// &, |, ^, ~, <<, >>
//these operators dosen't directly operate on numbers but instead operate on binary representation of numbers
// & - bitwise AND
// | - bitwise OR
// ^ - bitwise XOR
// ~ - bitwise NOT
// << - left shift
// >> - right shift

//left shift operator (<<) - shifts the bits of the number to the left and fills 0 on empty spaces
// 2 << 1 = 4
// 2 << 2 = 8
// 2 << 3 = 16

//right shift operator (>>) - shifts the bits of the number to the right and fills 0 on empty spaces
// 2 >> 1 = 1
// 2 >> 2 = 0
// 2 >> 3 = 0

console.log(2 & 3); //2
console.log(2 | 3); //3
console.log(2 ^ 3); //1
console.log(~2); //-3
console.log(2 << 1); //4
console.log(2 >> 1); //1

//* Ternary Operator:
//. ? :
//syntax: condition ? expression1 : expression2

//exponential operator:
//. **
console.log(2**3); //8




