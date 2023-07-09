//Anonymous:
var a= function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }
  console.log(a([1,2,3,4,3]))
//IIFE :
var a=(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })
   console.log(a([1,1,2,3,4]));
   