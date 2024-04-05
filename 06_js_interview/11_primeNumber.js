//Number divisible by 1 and itself.
//example: 2,3,5,7,11


var number = 12;
if(number ==1){
  console.log('1 is neither prime nor composite')
}else if(number<1){
  console.log('negative number is not a prime number')
}else{
  var flag=0;
  for(let i =2; i<number; i++){
    if(number%i==0){
      flag = 1;
      break;
    }

  }
  if(flag){
    console.log('not a prime number')
  }else{
    console.log(' prime number')
  }
}