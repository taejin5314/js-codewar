function balancedParens(n) {
  if (n === 0) return [''];
  else if (n === 1) return ['()'];

  let braces = balancedParens(n - 1);
  let resultSet = new Set();
  for (const s of braces) {
    for (let j = 0; j < s.length; j++) {
      let part1 = s.substring(0, j);
      let part2 = s.substring(j);

      resultSet.add(`${part1}()${part2}`);
      resultSet.add(`(${part1})${part2}`);
      resultSet.add(`${part1}(${part2})`);
    }
  }

  return Array.from(resultSet.values()).sort();
}


console.log(balancedParens(0).sort(), [""]);
console.log(balancedParens(1).sort(), ["()"]);
console.log(balancedParens(2).sort(), ["(())", "()()"]);
console.log(balancedParens(3).sort(), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(balancedParens(4).sort(), ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]);
console.log(balancedParens(5).sort())
