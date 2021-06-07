function digPow(n, p) {
  let sum = 0;
  n.toString().split('').map((elm) => {
    sum += Math.pow(parseInt(elm), p);
    p++;
  })
  return sum % n === 0 ? sum / n : -1;
}

console.log(digPow(89, 1), 1)
console.log(digPow(92, 1), -1)
console.log(digPow(46288, 3), 51)