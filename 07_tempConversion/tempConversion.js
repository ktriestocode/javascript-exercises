const ftoc = function(fahrenheit) {
  let c = (fahrenheit-32)*(5/9); 
  let roundedc = Math.round(c*10)/10; 
  return roundedc 
};

const ctof = function(celcius) {
  let f = (celcius*(9/5)) + 32; 
  let roundedf = Math.round(f*10)/10; 
  return roundedf 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
