const repeatString = function(str, num) {
  if (num < 0) {
    return "ERROR"
  } else {
    let result = []
    while (num > 0) {
      result.push(str);
      num--;
    }
    return result.join('');
  }  
};

// Do not edit below this line
module.exports = repeatString;

