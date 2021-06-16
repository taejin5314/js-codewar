function findPosition(num) {
  const indexes = [];

  for (let step = 0; step < num.length + 1; step++) {
    for (let start = 0; start < step; start++) {
      let index = parseNum(num, start, step);
      if (index >= 0) indexes.push(index);
    }
  }

  if (indexes.length === 0) return getTotalLength(parseInt('1' + num)) + 1;

  return Math.min(indexes);
}

function parseNum(num, start, step) {
  let n;
  if (start + step <= num.length) {
    n = parseInt(num.slice(start, start + step - 1));
  }
  else {
    let e1 = num.slice(start);
    let e2 = num.slice(0, start - 1);
    let commonLength = e1.length + e2.length - step;

    let chs = e2.slice(commonLength);
    if (chs == '9' * chs.length) {
      e1 += '0' * chs.length;
      n = parseInt(e1);
    } else {
      e1 = e1 + e2.slice(commonLength);
      n = parseInt(e1) + 1;
    }
    if ((n - 1).toString().slice(step - e2.length) != e2) return -1;
  }

  const tokens = [];
  let lena = 0;

  if (start) {
    let prev = (n - 1).toString();
    tokens.push(prev.slice(prev.length - start));
    lena += start;
  }

  let x = n;

  while (lena < num.length) {
    let stra = x.toString();
    if (stra.length + lena > num.length) {
      tokens.push(stra.slice(0, num.length - lena - 1));
      lena += num.length - lena;
    } else {
      tokens.push(stra);
      lena += stra.length;
    }
    x += 1;
  }

  if (tokens.join('') === num) {
    let total = getTotalLength(n);
    return total - start;
  } else return -1;
}

function getTotalLength(n) {
  let total = 0, lena = 1, x = 10;

  while (n > x) {
    total += lena * (x - x / 10);
    x *= 10;
    lena += 1;
  }

  total += lena * (n - x / 10);
  return total;
}

console.log(findPosition("456"), 3, "...3456...")
console.log(findPosition("454"), 79, "...444546...")
console.log(findPosition("455"), 98, "...545556...")
console.log(findPosition("910"), 8, "...7891011...")
console.log(findPosition("9100"), 188, "...9899100...")
console.log(findPosition("99100"), 187, "...9899100...")
console.log(findPosition("00101"), 190, "...99100101...")
console.log(findPosition("001"), 190, "...9899100...")
console.log(findPosition("00"), 190, "...9899100...")
console.log(findPosition("123456789"), 0)
console.log(findPosition("1234567891"), 0)
console.log(findPosition("123456798"), 1000000071)
console.log(findPosition("10"), 9)

console.log(findPosition("53635"), 13034)
console.log(findPosition("040"), 1091)

console.log(findPosition("11"), 11)
console.log(findPosition("99"), 168)
console.log(findPosition("667"), 122)
console.log(findPosition("0404"), 15050)
console.log(findPosition("949225100"), 382689688)
console.log(findPosition("58257860625"), 24674951477)
console.log(findPosition("3999589058124"), 6957586376885)
console.log(findPosition("555899959741198"), 1686722738828503)

console.log(findPosition("01"), 10)
console.log(findPosition("091"), 170)
console.log(findPosition("0910"), 2927)
console.log(findPosition("0991"), 2617)
console.log(findPosition("09910"), 2617)
console.log(findPosition("09991"), 35286)