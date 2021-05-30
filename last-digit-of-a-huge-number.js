function lastDigit(as) {
  let n = 1;
  if (as.length === 0) return 1;
  for (let i = as.length; i >= 0; i--) {
    n = Math.pow(as[i], (n < 4) ? n : n % 4 + 4)
    console.log(n)
  }
  return n;
}

console.log(lastDigit([]), 1);
console.log(lastDigit([0, 0]), 1); // 0 ^ 0
console.log(lastDigit([0, 0, 0]), 0); // 0^(0 ^ 0) = 0^1 = 0
console.log(lastDigit([1, 2]), 1);
console.log(lastDigit([3, 4, 5]), 1);
console.log(lastDigit([4, 3, 6]), 4);
console.log(lastDigit([7, 6, 21]), 1);
console.log(lastDigit([12, 30, 21]), 6);
console.log(lastDigit([2, 2, 2, 0]), 4);
console.log(lastDigit([937640, 767456, 981242]), 0);
console.log(lastDigit([123232, 694022, 140249]), 6);
console.log(lastDigit([499942, 898102, 846073]), 6);

var r1 = Math.floor(Math.random() * 100);
var r2 = Math.floor(Math.random() * 10);

console.log(lastDigit([]), 1);
console.log(lastDigit([r1]), r1 % 10);
console.log(lastDigit([r1, r2]), Math.pow(r1 % 10, r2) % 10);