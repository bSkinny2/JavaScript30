const add = function(x,y) {
  return x+y;	
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(array) {
  return array.reduce((previous, current) => previous + current, 0)
};

const multiply = function(array) {
  return array.reduce((current, previous) => previous * current)
};

const power = function(x,y) {
  return Math.pow(x,y);
	
};

const factorial = function(x) {
  var output 
  if (x == 0) {return 1
  }
  else {
    output = x;
    for (let i = 1; i < x; i++) {
      output *= i
    }
  }
	return output
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
