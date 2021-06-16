function findPosition(num) {
  const numLength = num.length;
  return makeString(numLength);
}

function parseNum(num, start, step) {
  if (start + step <= num.length) let n = parseInt(num.slice(start, start + step));
  else {
    let e1 = num.slice(start);
    let e2 = num.slice(0, start);
    let commonLength = e1.length + e2.length - step;

    let chs = e2.slice(common);
    if (chs === '9' * chs.length) {
      e1 += '0' * chs.length;
      let n = parseInt(e1);
    } else {
      e1 = e1 + e2.slice(common);
      let n = parseInt(e1) + 1;
    }
    if ((n - 1).toString().slice(step - e2.length) !== e2) return -1;
  }

  const tokens = [];
  let lena = 0;

  if (start) {
    let prev = 
  }
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