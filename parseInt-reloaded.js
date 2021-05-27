function parseInt(string) {
  const map = { "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "sever": 7, "eight": 8, "nine": 9, "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19, "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90 };
  const multiMap = { "hundred": 100, "thousand": 1000, "million": 1000000 };
  let result = 0, result2 = 0, multiply = 0;

  function hyphenSplit(string) {
    const arr = string.split('-');
    let num = 0;
    if (arr.length > 1) {
      for (let i = 0; i < arr.length; i++) {
        num += map[arr[i]];
      }
    } else num += map[arr[0]];
    return num;
  }

  const numberArray = string.split(' ');
  for (let i = 0; i < numberArray.length; i++) {
    console.log(hyphenSplit(numberArray[i]));
  }
}


console.log(parseInt('one'), 1);
console.log(parseInt('twenty'), 20);
console.log(parseInt('two hundred forty-six'), 246);