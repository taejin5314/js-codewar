function scale(strng, k, n) {
  // your code
}

var a = "abcd\nefgh\nijkl\nmnop";
var r = "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
console.log(scale(a, 2, 3), r);
console.log(scale("", 5, 5), "");
console.log(scale("Kj\nSH", 1, 2), "Kj\nKj\nSH\nSH");