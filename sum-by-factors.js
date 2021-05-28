function sumOfDivided(lst) {
  //your code
  let max = lst[0];
  for (let elm of lst) {
    if (Math.abs(elm) > Math.abs(max)) max = elm;
  }
  const primeArr = primeNumber(Math.abs(max));
  let result = [];

  for (let i = 0; i < primeArr.length; i++) {
    let total = 0, count = 0;
    for (let j = 0; j < lst.length; j++) {
      if (lst[j] % primeArr[i] === 0) {
        total += lst[j];
        count++;
      }
    }
    if (count !== 0) result.push([primeArr[i], total]);
  }

  return result;
}

function primeNumber(max) {
  let arr = [];
  for (let n = 2; n <= max; n++) {
    let count = 0;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        count++;
      }
    }
    if (count === 0) arr.push(n);
  }
  return arr;
}


console.log(sumOfDivided([12, 15]), [[2, 12], [3, 27], [5, 15]]);
console.log(sumOfDivided([15, 21, 24, 30, 45]), [[2, 54], [3, 135], [5, 90], [7, 21]]);
console.log(sumOfDivided([-45, 5, 15]));