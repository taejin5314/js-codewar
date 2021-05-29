var spiralize = function (size) {
  // insert code here
  let a = 0, b = -1, arr = Array.from(Array(size), () => new Array(size).fill(0));
  let even = (size % 2 === 0) ? false : true;
  // console.log("array: ", arr);
  for (let i = size; i >= 1; i--) {
    let direction = (size - i) % 4;
    if (i !== size && even) {
      if (i % 2 !== 0) c = i + 1;
      else c = i;
    } else if (i !== size && !even) {
      if (i % 2 === 0) c = i + 1;
      else c = i;
    } else c = i;
    for (let j = 0; j < c; j++) {
      if (direction === 0 && b < size - 1) {
        b++;
      } else if (direction === 1 && a < size - 1) {
        a++;
      } else if (direction === 2 && b > 0) {
        // going left
        b--;
      } else if (direction === 3 && a > 0) {
        // going up
        a--;
      }
      arr[a][b] = 1;
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