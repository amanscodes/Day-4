//anonymous  :
  var a=function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
  console.log(a([1,2,3]))
//IIFE :
       (function(array){
var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
}) 
console.log(a([1,2,3]));
//Arrow: 
      sum = (array)=>{
var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
     }
     console.log(sum([1,2,3]));