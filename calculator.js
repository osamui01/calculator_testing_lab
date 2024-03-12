const sum = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const modulus = function (a, b) {
  return a % b;
};

const even = (num) => {
  return num % 2 === 0;
};

const odd = (num) => {
  return num % 2 !== 0;
};

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
};
