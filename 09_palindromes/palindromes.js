const palindromes = function (str) {
  let regex = /[A-Z]/gi;
  let string = str.toLowerCase().match(regex).join(''); 
  let revStrn =  string.split('').reverse().join('');
  return revStrn == string ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
