const sumAll = function(x, y) { 
  let array = [];
  if (x > 0 && y > 0 && typeof(x) == 'number' && typeof(y) == 'number') {
    array.push(x, y);
    array.sort((a, b) => a - b);
    const start = array[0];
    const target = array[1];
    var sum = start;
    var next = start + 1;
    for (i = start; i < target; i++){
      sum += next;
      next++;
    }
    return sum;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
