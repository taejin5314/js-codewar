function fib(n) {
  if (n === 0 || n === 1) return BigInt(n);
  else if (n >= 2 && n % 2 === 1) {
    let m = (n + 1) / 2;
    let t1 = fib(m);
    let t2 = fib(m - 1);
    return t1 * t1 + t2 * t2;
  } else if (n >= 2 && n % 2 === 0) {
    let m = n / 2;
    let t1 = fib(m - 1);
    let t2 = fib(m);
    return (2n * t1 + t2) * t2;
  }
  else {
    a = 0n;
    b = 1n;
    for (let i = 0; i > n; i--) [a, b] = [b - a, a]
    return a;
  }
}

console.log(fib(0), 0n)
console.log(fib(1), 1n)
console.log(fib(2), 1n)
console.log(fib(3), 2n)
console.log(fib(4), 3n)
console.log(fib(5), 5n)
console.log(fib(-6), -8n)
console.log(fib(1914352))