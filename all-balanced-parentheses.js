function balancedParens(n) {
  let combinations = [];
  let currentArr = [];
  generateAllBalacnedParens(2 * n, currentArr, 0, combinations);

  function generateAllBalacnedParens(currentLength, currentArr, pos, result) {
    if (pos === currentLength) {
      if (valid(current)) result.push(currentArr);
    } else {
      currentArr[pos] = '(';
      generateAllBalacnedParens(currentLength +)
    }
  }
}

console.log(balancedParens(0).sort(), [""]);
console.log(balancedParens(1).sort(), ["()"]);
console.log(balancedParens(2).sort(), ["(())", "()()"]);
console.log(balancedParens(3).sort(), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(balancedParens(4).sort(), ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]);
console.log(balancedParens(5).sort())
