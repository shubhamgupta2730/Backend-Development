//we need a blueprint to design a product.
//blueprint is also known as template.
//These blueprint are known as Classes.
//And the real instances are known as objects.

//In js we have a class keyword.
//Inside Class we will define properties(data members) and behavior(member functions).

//to define member functions, we can just write normal function in the class.
//but we need a special function which is not a member functions: Constructor.

//to define data members, we need to initialize them inside constructor using this keyword.

class Product {
  //constructor: 
  //when we create object, this is the first function which will be called.
  constructor(n, p) {
    this.name = n;
    this.price = p;
  }
  //member function:
  displayProduct() {
    // console.log(this.name, this.price);

  }
  buyProduct() {

  }
}

let iphone = new Product('Iphone 11', 50000);
let mac = new Product('macbook', 100000);
// console.log(iphone, mac);
// console.log(typeof(iphone)) //object
//calling member functions on an object.
iphone.displayProduct();


//? this keyword: 
//In js, this keyword references to the calling side, ie, from where the function or class is called.

//?new keyword: 
//new keyword not only calls constructor, but it does a more things.
//new keyword is not only associated with classes but it can be used with functions also.

function product(n, p) {
  this.name = n;
  this.price = p;
  return this;
}
const p1 = new Product('iphone', 1000);
// console.log(p1)
//output will be same as in above class.

//The new keyword executes 4 step process. 

//1. the new keyword creates a brand new empty js object. 
//2. It does the process of linking. 
//3. It calls the function with the this keyword property assigned to the empty object it created before.
//4. the function execution starts and this keyword belonging to the calling side.
//if it dosen't return any specific object, then it automatically returns this


//! PROTOTYPES: 

//by default objects are created using constructor calls using new keyword.
//Prototype is a mechanism by which js objects inherit features from one another.
//Prototype is a property of a js object.
//Prototype is a property of a function.
//Prototype is a property of a class.



//this keyword with normal functions: 
let obj = {
  name: 'Shubham',
  company: 'TCS',
  display: function () {
    console.log(this.name, "works in ", this.company);
  }
}
obj.display();

//this keyword with arrow functions:
//arrow functions does not have their own this keyword.
//arrow functions uses this keyword from the parent scope.
let obj1 = {
  name: 'Shubham',
  company: 'TCS',
  display: () => {
    console.log(this.name, "works in ", this.company);
  }
}
obj1.display();
//output: undefined works in undefined
//In arrow functions, this keyword is not defined, so it will take the this keyword from the parent scope.
//In this case, parent scope is global scope, so it will take the this keyword from the global scope.
//In global scope, this keyword is window object.
//so, it will print undefined works in undefined.


let obj2 = {
  name: 'Shubham',
  company: 'TCS',
  display: () => {
    setTimeout(() => {
      console.log(this.name, "works in ", this.company);
    }
      , 1000)
  }
}
obj2.display();
//output: undefined works in undefined
//In this case, the parent scope of arrow function is setTimeout function.
//In setTimeout function, this keyword is window object.
//so, it will print undefined works in undefined.

let obj3 = {
  name: 'Shubham',
  company: 'TCS',
  display: function () {
    setTimeout(() => {
      console.log(this.name, "works in ", this.company);
    }
      , 1000)
  }
}
obj3.display();
//output: Shubham works in TCS
//In this case, the parent scope of arrow function is display function.
//In display function, this keyword is obj3 object.
//so, it will print Shubham works in TCS.


//! call, apply, bind methods:
//these methods are used to change the value of this keyword.
//these methods are used to call a function with a specific value of this keyword.

const players = {
  firstname: 'Virat',
  lastname: 'Kohli',
  numberToBat: 3,
  canBowl: false,
  getDetails: function () {
    console.log(this.firstname, this.lastname, "comes at no.: ", this.numberToBat);
  }
}

const obj4 = function () {
  console.log(this.getDetails());
}

let x = obj4.bind(players);
x();
// obj4();

//* bind method: 
//bind method create new function and binds the value of this keyword to the object passed as argument.
//bind method does not call the function, it just returns the new function.
//bind method is used to call the function later.
//bind method is used to call the function with a specific value of this keyword.

//* call method:
//call method is used to call the function immediately.
//call method is used to call the function with a specific value of this keyword.
//call method takes the object as the first argument.

const obj5 = function () {
  this.getDetails();
}

obj5.call(players);

//* apply method:
//apply method is similar to call method.
//apply method is used to call the function immediately.
//apply method is used to call the function with a specific value of this keyword.
//apply method takes the object as the first argument.
//apply method takes the array as the second argument.

const obj6 = function () {
  this.getDetails();
}

obj6.apply(players);

//? In call and apply method, the difference is in the way we pass the arguments.
//? In call method, we pass the arguments one by one.
//? In apply method, we pass the arguments in an array.



//! array; 
//array is a collection of elements.
let arr = [1, 2, 3, 4, 5];
console.log(typeof (arr)); //object


//! object.freeze method:
let obj7 = {
  x: 10,
  y: 20

}
console.log(typeof (obj7)); //object
Object.freeze(obj7);
obj7.x = 100;
console.log(obj7.x); //10
//Object.freeze is used to make the object immutable.
//we can't change the value of the object after freezing it.

//! object.seal method:
let obj8 = {
  x: 10,
  y: 20

}
console.log(typeof (obj8)); //object
Object.seal(obj8);
obj8.x = 100;
console.log(obj8.x); //100
//Object.seal is used to make the object non-extensible.
//we can change the value of the object after sealing it.
//we cannot add new properties to the object after sealing it.


//object.keys method:
let obj9 = {
  x: 10,
  y: 20,
  z: 30
}
console.log(Object.keys(obj9)); //['x','y','z']

//object.values method:
let obj10 = {
  x: 10,
  y: 20,
  z: 30
}
console.log(Object.values(obj10)); //[10,20,30]

//object.entries method:

let obj11 = {
  x: 10,
  y: 20,
  z: 30
}
console.log(Object.entries(obj11)); //[['x',10],['y',20],['z',30]]

//map, filter, reduce methods:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.map((value) => {
  return value * 2;
})
console.log(arr2); //[2,4,6,8,10]
//map method is used to create a new array by applying a function to each element of the array.

let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr3.filter((value) => {
  return value > 2;
})
console.log(arr4); //[3,4,5]
console.log(arr3); //[1,2,3,4,5]
//filter method is used to create a new array by filtering out the elements of the array.

let arr5 = [1, 2, 3, 4, 5];
let sum = arr5.reduce((accumulator, value) => {
  return accumulator + value;
}, 0)

console.log(sum); //15
//reduce method is used to reduce the array to a single value.
//reduce method takes two arguments, first is the callback function and second is the initial value of the accumulator.

//for...in iterates over object properties (including inherited ones), whereas for...of iterates over iterable object values