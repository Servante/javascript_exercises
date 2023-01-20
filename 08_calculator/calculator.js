const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  if (arr.length == 0 ) {
    return 0;
  } else {
    var result = arr[0];
    for (i = 1; i < arr.length; i++) {result += arr[i]}
    return result;
  } 
};

const multiply = function(arr) {
  var result = arr[0];
  for (i = 1; i < arr.length; i++) { result = result * arr[i]}
  return result;
};

const power = function(x, y) {
  return x**y;
};

const factorial = function(num) {
  if (num === 0 || num === 1){
    return 1;
  } else {
    for (var i = num - 1; i >= 1; i-- ){num *= i }
    return num;  
  }
};

/*

if (num > 5 || num == 7) {
    console.log("test1");
} else {
    console.log("test2");
};

OR works funny, try using it in reverse

*/


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};