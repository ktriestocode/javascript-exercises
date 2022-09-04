const sumAll = function(a,b) {
    let finalSum = 0; 
    if (typeof a === "number" && typeof b === "number"){ 
    if (a < b && a>0 && b>0) {  
     for (i=a; i<=b; i++){ 
         finalSum += i; 
     }} else if (a>b && a>0 && b>0) { 
     for (i=a; i>=b; i--){ 
         finalSum += i; 
         } 
     } else if (a<0||b<0){ 
         return "ERROR"; 
     } 
   return finalSum;  
 } else { 
      return "ERROR"; 
 } 
 }; 


// Do not edit below this line
module.exports = sumAll;
