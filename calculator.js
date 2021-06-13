const Calculator = function () {
  this.evaluate = string => {
    let arr = string.split(' ')

  }
};

var calculate = new Calculator()
console.log(calculate.evaluate('127'), 127);
console.log(calculate.evaluate('2 + 3'), 5);
console.log(calculate.evaluate('2 - 3 - 4'), -5);
console.log(calculate.evaluate('10 * 5 / 2'), 25);