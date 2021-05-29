var spiralize = function (size) {
  // insert code here
  snail(size)
}

snail = function (array) {
  let arr = [], a = 0, b = -1;
  const arrayLength = array.length;
  if (array[0][0] === undefined) return arr;
  for (let i = arrayLength * 2 - 1; i >= 1; i--) {
    let direction = (arrayLength * 2 - 1 - i) % 4
    for (let j = 0; j < Math.ceil(i / 2); j++) {
      if (direction === 0 && b < arrayLength - 1) {
        // going right
        b++;
      } else if (direction === 1 && a < arrayLength - 1) {
        // going down
        a++;
      } else if (direction === 2 && b > 0) {
        // going left
        b--;
      } else if (direction === 3 && a > 0) {
        // going up
        a--;
      }
      arr.push(array[a][b]);
    }
  }
  return arr;
}

console.log(spiralize(5), [[1, 1, 1, 1, 1],
[0, 0, 0, 0, 1],
[1, 1, 1, 0, 1],
[1, 0, 0, 0, 1],
[1, 1, 1, 1, 1]])
console.log(spiralize(8), [[1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 0, 0, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1]])