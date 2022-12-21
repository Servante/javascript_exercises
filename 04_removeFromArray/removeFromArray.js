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
