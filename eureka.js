function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    let eureka = 0, index = 0;
    for (const j of i.toString()) {
      index++;
      eureka += Math.pow(parseInt(j), index);
    }
    if (eureka === i) arr.push(i);
  }
  return arr;
}

console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
console.log(sumDigPow(10, 100), [89]);
console.log(sumDigPow(90, 100), []);
console.log(sumDigPow(90, 150), [135]);
console.log(sumDigPow(50, 150), [89, 135]);
console.log(sumDigPow(10, 150), [89, 135]);