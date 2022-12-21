const removeFromArray = function(arr, ...args) {
  let moddedArray = [...arr];
  for (i=0; i < arr.length; i++) {
    if (moddedArray.includes(args[i])) {
      moddedArray.splice(moddedArray.indexOf(args[i]), 1)
    }
  }
  return moddedArray;
};

// Do not edit below this line
module.exports = removeFromArray;


// if Array.isArray(v)
//   loop through array and find indexes
//   loop through given array removing elements
// else
// standard method of removing element (see if the above looping would work with just one element too)

// expand array using spread syntax
// 