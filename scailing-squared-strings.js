function scale(strng, k, n) {
  let arr = strng.split('\n'), newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newString = ''
    for (let j = 0; j < arr[i].length; j++) {
      newString += arr[i][j].repeat(k);
    }
    newArr.push((newString + '\n').repeat(n));
  }
  return newArr.join('');
}

var a = "abcd\nefgh\nijkl\nmnop";
var r = "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
console.log(scale(a, 2, 3), r);
console.log(scale("", 5, 5), "");
console.log(scale("Kj\nSH", 1, 2), "Kj\nKj\nSH\nSH");