function expand(expr) {
  const arr = expr.split('^');
  const n = parseInt(arr[1]);
  let a, x, b;
  if (n === 0) return '1';
  else if (n === 1) return arr[0].slice(1, -1);
  else {
    if (arr[0][1] === '-') {
      console.log(parseInt(arr[0][2]))
      if (parseInt(arr[0][2]) === NaN) {
        a = -1;
        x = arr[0][2];
        b = parseInt(arr[0].slice(3))
      } else {
        a = parseInt(arr[0].slice(1, 3))
      }
    }
    console.log(a, x, b);
  }
}

console.log(expand("(x+1)^0"), "1");
console.log(expand("(x+1)^1"), "x+1");
console.log(expand("(x+1)^2"), "x^2+2x+1");
console.log(expand("(x-1)^0"), "1");
console.log(expand("(x-1)^1"), "x-1");
console.log(expand("(-x-1)^2"), "x^2-2x+1");
console.log(expand("(5m+3)^4"), "625m^4+1500m^3+1350m^2+540m+81");
console.log(expand("(2x-3)^3"), "8x^3-36x^2+54x-27");
console.log(expand("(7x-7)^0"), "1");
console.log(expand("(-5m+3)^4"), "625m^4-1500m^3+1350m^2-540m+81");
console.log(expand("(-2k-3)^3"), "-8k^3-36k^2-54k-27");
console.log(expand("(-7x-7)^0"), "1");