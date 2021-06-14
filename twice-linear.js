function dblLinear(n) {
  let dbl = [1], x = 0, y = 0;

  while (dbl.length <= n) {
    let a = 2 * dbl[x] + 1;
    let b = 3 * dbl[y] + 1;

    if (a > b) {
      dbl.push(b);
      y++;
    } else if (a < b) {
      dbl.push(a);
      x++;
    } else {
      dbl.push(a);
      x++;
      y++;
    }
  }
  return dbl[n];
}

console.log(dblLinear(10), 22)
console.log(dblLinear(20), 57)
console.log(dblLinear(30), 91)
console.log(dblLinear(50), 175)
console.log(dblLinear(100), 447)