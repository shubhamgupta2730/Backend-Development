function todo(task){

  setTimeout(function fun(){
    console.log("completed", task);
  }, 2000);
}
console.log("Starting");
todo("assignments");
console.log("Ending");
//At time instance, when function fun is called , the todo function is already over.
//if fun function is called after the completion of todo has ended, how fun function is able to access task variable.

//* this happens due to closures.

//closure is when a function "remembers"its lexical scope even when the function is executed outside that lexical scope.

//if todo is completed , it will be removed from call stack, how actually the variables still permit??where are they stored?

//js manages a separate closure execution context, and maintains all the variables that are still going to be persist.

 
//* lexical scoping: Lexical scope is the ability for a function scope to access variables from the parent scope.

//* A closure gives you access to an outer function's scope from an inner function.
