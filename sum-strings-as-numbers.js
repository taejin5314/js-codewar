function sumStrings(a, b) {
  let A = (a === '' ? 0 : new BigInt(a));
  let B = (b === '' ? 0 : new BigInt(b));
  return (A.add(B)).toString();
}

console.log(sumStrings('123', '456'), '579')
console.log(sumStrings('131095813098613680', '103958093859018349068039860934860923486039'))