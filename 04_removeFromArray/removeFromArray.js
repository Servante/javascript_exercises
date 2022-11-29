const removeFromArray = function(arr, ...v) {
  index = arr.indexOf(v);
  arr.splice(index, 1);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;


// if Array.isArray(v)
//   loop through array and find indexes
//   loop through given array removing elements
// else
// standard method of removing element (see if the above looping would work with just one element too)