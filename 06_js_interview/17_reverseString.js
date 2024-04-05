var str = 'hello world';
//using for loop: 
let revString = '';
for(let i = str.length-1; i>=0; i--){
  revString+=str[i];
}
console.log(revString)