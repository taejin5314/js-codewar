function solution(str, ending) {
  // TODO: complete
  return str.endsWith(ending, str.length)
}

console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)