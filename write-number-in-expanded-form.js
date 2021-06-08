function expandedForm(num) {
  let numLength = num.toString().length;
  let result = '';
  for (let i = numLength - 1; i >= 0; i--) {
    if (Math.floor(num / Math.pow(10, i)) > 0) {
      result += Math.floor(num / Math.pow(10, i)) * Math.pow(10, i) + ' + ';
      num -= Math.floor(num / Math.pow(10, i)) * Math.pow(10, i)
      numLength = num.toString().length;
    }
  }
  return result.slice(0, -3);
}

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');