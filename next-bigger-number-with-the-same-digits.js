function nextBigger(n) {
  let arr = [];
  for (let i = 0; i < factorial(n); i++) {
    let combination = ''
    n.toString().split('').forEach((elm) => {
      console.log(elm, index);
    })
  }
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return n;
}

console.log(nextBigger(12), 21)
console.log(nextBigger(513), 531)
console.log(nextBigger(2017), 2071)
console.log(nextBigger(414), 441)
console.log(nextBigger(144), 414)