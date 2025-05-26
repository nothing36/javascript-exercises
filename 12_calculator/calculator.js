const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numArray) {
  let sumTotal = 0
	numArray.forEach(num => {sumTotal += num})
  return sumTotal
};

const multiply = function(numArray) {
  let mulTotal = 1
	numArray.forEach(num => {mulTotal *= num})
  return mulTotal
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  if (num.length == 0) {return 0}

	let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
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
