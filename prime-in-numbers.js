function primeFactors(n) {
  //your code here
  let result = '', newN = n;
  for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
    if (isPrime(i)) {
      let count = 0;
      while (newN % i === 0) {
        count++;
        newN /= i;
      }
      if (count > 1) result += `(${i}**${count})`
      else if (count === 1) result += `(${i})`;
    }
  }
  if (newN !== 1) return result += `(${newN})`
  return result
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeFactors(7775460), "(2**2)(3**3)(5)(7)(11**2)(17)")