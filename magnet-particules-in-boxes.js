function doubles(maxk, maxn) {
  let result = 0;
  for (let i = 1; i <= maxk; i++) {
    result += u(i, maxn);
  }
  return result;
}

function v(k, n) {
  return 1 / (k * Math.pow(n + 1, 2 * k));
}

function u(k, n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += v(k, i);
  }
  return result;
}

console.log(doubles(1, 10), 0.5580321939764581);
console.log(doubles(10, 1000), 0.6921486500921933);
console.log(doubles(10, 10000), 0.6930471674194457);
console.log(doubles(20, 10000), 0.6930471955575918);