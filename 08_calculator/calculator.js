const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(arr) {
	let sum = 0;
  for (i=0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum
};

const multiply = function(arr) {
  let prod = 1
  for (i=0; i < arr.length; i++){
    prod *= arr[i]
  }
  return prod;
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  let prod = 1
  for (i = a; i > 0; i--)  {
    prod *= i
  }
  return prod
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
