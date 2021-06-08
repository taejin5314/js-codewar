function sumStrings(a, b) {
  let A = BigInt(a);
  let B = BigInt(b);
  return (A + B).toString();
}

console.log(sumStrings('123', '456'), '579')
console.log(sumStrings('131095813098613680', '103958093859018349068039860934860923486039'))