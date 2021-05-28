function balancedParens(n) {
  let str = new Array(2 * n);
  if (n === 0) return [""]
  return printParenthesis(str, n);
}

function _printParenthesis(str, pos, n, open, close) {
  if (close == n) {
    // prvar the possible combinations
    for (let i = 0; i < str.length; i++)
      document.write(str[i]);
    document.write("<br/>");
    return;
  }
  else {
    if (open > close) {
      str[pos] = '}';
      _printParenthesis(str, pos + 1, n, open, close + 1);
    }
    if (open < n) {
      str[pos] = '{';
      _printParenthesis(str, pos + 1, n, open + 1, close);
    }
  }
}
// Wrapper over _printParenthesis()
function printParenthesis(str, n) {
  if (n > 0)
    _printParenthesis(str, 0, n, 0, 0);
  return;
}

console.log(balancedParens(0).sort(), [""]);
console.log(balancedParens(1).sort(), ["()"]);
console.log(balancedParens(2).sort(), ["(())", "()()"]);
console.log(balancedParens(3).sort(), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(balancedParens(4).sort(), ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]);
console.log(balancedParens(5).sort())
