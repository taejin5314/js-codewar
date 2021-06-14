function fib(n) {
  let N = BigInt(n);

  if (N === 0) {
    console.log(N);
  }
  return BigInt(n);
}

console.log(fib(0), 0n)
console.log(fib(1), 1n)
console.log(fib(2), 1n)
console.log(fib(3), 2n)
console.log(fib(4), 3n)
console.log(fib(5), 5n)
console.log(fib(-6), -8n)