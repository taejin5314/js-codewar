function dblLinear(n) {
  let dbl = [1];
  let i = 0;

  if (dbl[n] !== undefined) return dbl[n];
  while (dbl[n] === undefined) {
    dbl = !dbl.indexOf(dbl[i] * 2 + 1) ? dbl.push(dbl[i] * 2 + 1) : dbl;
    dbl = !dbl.indexOf(dbl[i] * 3 + 1) ? dbl.push(dbl[i] * 3 + 1) : dbl;
    i++;
  }
  return dbl[n];

}

console.log(dblLinear(10), 22)
console.log(dblLinear(20), 57)
console.log(dblLinear(30), 91)
console.log(dblLinear(50), 175)
console.log(dblLinear(100), 447)