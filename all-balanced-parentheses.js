function balancedParens(n) {
  let result = []
  if (n === 0) result.push("");
  else if (n === 1) result.push("()");
  else if (n > 1 && n % 2 === 1) {
    for (let elm of balancedParens(n - 1)) {
      result.push("(" + elm + ")");
      result.push("()" + elm);
      result.push(elm + "()");
    }
  } else if (n > 1 && n % 2 === 0) {
    let temp = balancedParens(n - 2)[0];
    if (temp !== '') {
      result.push(temp.repeat(2));
    }
    for (let elm of balancedParens(n - 1)) {
      result.push("(" + elm + ")");
      result.push("()" + elm);
      result.push(elm + "()");
    }
  }
  return result.filter((item, index) => result.indexOf(item) === index);
}

console.log(balancedParens(0).sort(), [""]);
console.log(balancedParens(1).sort(), ["()"]);
console.log(balancedParens(2).sort(), ["(())", "()()"]);
console.log(balancedParens(3).sort(), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(balancedParens(4).sort(), ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]);
console.log(balancedParens(5).sort())
