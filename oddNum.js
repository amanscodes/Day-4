//anonymous:
var a =function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }
  console.log(a([1,2,3]));
  //iife:
  var a= (function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })
    console.log(a([1,2,3]));
    //arrow:
    oddNum = (array) => {
        for(var i = 0 ; i< array.length ; i++){
             if(array[i]%2!=0){
                console.log(array[i])
             } 
        }
             }
             console.log(oddNum([1,2,3]));