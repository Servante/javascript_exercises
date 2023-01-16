const sumAll = function(x, y) { 
  let array = [];
  if (x > 0 && y > 0 && typeof(x) != 'string' && typeof(y) != 'string') {
    array.push(x, y);
    array.sort((a, b) => a - b);
    
  } else {
    'ERROR'
  }
};

// Do not edit below this line
module.exports = sumAll;
