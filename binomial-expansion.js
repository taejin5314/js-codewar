function expand(expr) {
  const arr = expr.split('^');
  const n = parseInt(arr[1]);
  let elmArray = [];
  let a, x, b;
  let result = '';
  if (n === 0) return '1';
  else if (n === 1) return arr[0].slice(1, -1);
  else {
    for (let elm of arr[0].split(/[a-z]|\(|\)|\+/)) {
      if (elm !== '') {
        if (elm === '-') elm = -1;
        elmArray.push(parseInt(elm));
      }
    }
    if (elmArray.length < 2) elmArray.unshift(1);
    elmArray.push(arr[0].split(/\(|\d|\)|\-|\+/).join('').trim());
    a = elmArray[0];
    b = elmArray[1];
    x = elmArray[2];
  }

  for (let i = n; i >= 0; i--) {
    if (i !== 0) {
      const temp = Math.pow(a, i) * Math.pow(b, n - i) * combinations(n, i)
      if (i !== n && temp > 0) result += '+' + temp;
      else if (i === n && temp !== 1) result += (temp !== -1) ? temp : '-';
      else if (temp < 0) result += temp;
      else {
        result += '';
      }
      result += (i !== 1) ? x + '^' + i : (temp !== 0) ? x : '';
    } else {
      if (Math.pow(b, n - i) > 0) result += '+' + Math.pow(b, n - i);
      else if (b === 0) result += '';
      else result += Math.pow(b, n - i);
    }
  }
  return result;
}

function factorial(a) {
  let result = 1;
  for (let i = 1; i <= a; i++) result *= i;
  return result;
}

function combinations(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r))
}

console.log(expand("(x+0)^0"), "1");
console.log(expand("(x+1)^1"), "x+1");
console.log(expand("(x+0)^2"), "x^2");
console.log(expand("(x-1)^0"), "1");
console.log(expand("(x-1)^1"), "x-1");
console.log(expand("(-m-1)^3"), "x^2-2x+1");
console.log(expand("(5m+3)^4"), "625m^4+1500m^3+1350m^2+540m+81");
console.log(expand("(2x-3)^3"), "8x^3-36x^2+54x-27");
console.log(expand("(7x-7)^0"), "1");
console.log(expand("(-5m+3)^4"), "625m^4-1500m^3+1350m^2-540m+81");
console.log(expand("(-2k-3)^3"), "-8k^3-36k^2-54k-27");
console.log(expand("(-246247x-77247)^3"), "1");