//loops
//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}   

//while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//do while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

//for in loop
let person = {name: 'John', age: 30, city: 'New York'};
for (let key in person) {
    console.log(key, person[key]);
}

//for of loop
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

//break statement
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

//continue statement
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

//nested loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(i, j);
    }
}

//for each loop
let numbers = [1, 2, 3];
numbers.forEach(function(number) {
    console.log(number);
});


//switch statement
let grade = 'A';
switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('Average');
        break;
    case 'D':
        console.log('Poor');
        break;
    default:
        console.log('Invalid grade');
}

//switch statement with string: 
let val = '10';
switch (val) {
    case 10:
        console.log('10');
        break;
    case '10':
        console.log('String 10');
        break;
    default:
        console.log('Invalid');
}