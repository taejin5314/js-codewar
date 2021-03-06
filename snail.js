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

console.log(snail([[]]), []);
console.log(snail([[1]]), [1]);
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);