const convertToCelsius = function(f) {
  var c = f - 32;
      c = c * 5;
      c = c / 9;
      return Math.round(c * 10) / 10;
};

const convertToFahrenheit = function(c) {
  var f = c * 1.8;
      f = f + 32;
      return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
