function sumStrings(a, b) {
  a = BigInt(a).toString();
  b = BigInt(b).toString();
  let result = [], x = 0;
  for (let i = 1; i <= Math.max(a.length, b.length); i++) {
    if (a[a.length - i] && b[b.length - i]) result.unshift((parseInt(a[a.length - i]) + parseInt(b[b.length - i]) + x) % 10);
    else if (a[a.length - i]) result.unshift(parseInt(a[a.length - i]) + x);
    else if (b[b.length - i]) result.unshift(parseInt(b[b.length - i]) + x);
    if (parseInt(a[a.length - i]) + parseInt(b[b.length - i]) + x >= 10) x = 1;
    else x = 0;
  }
  if (x === 1) result.unshift('1');
  return result.join('');
}

console.log(sumStrings('123', '456'), '579')
console.log(sumStrings('131095813098613680', '103958093859018349068039860934860923486039'))
console.log(sumStrings('0135', '0000013'))