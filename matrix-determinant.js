function determinant(m) {
  let result = 0;
  if (m[0].length === 1) return m[0][0];
  else if (m[0].length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  } else if (m[0].length > 2) {
    for (let i = 0; i < m[0].length; i++) {
      let newMatrix = [];
      for (let j = 1; j < m.length; j++) {
        let newArray = [];
        for (let k = 0; k < m[0].length; k++) {
          if (k != i) {
            newArray.push(m[j][k]);
          }
        }
        newMatrix.push(newArray);
      }
      result += m[0][i] * determinant(newMatrix) * Math.pow(-1, i);
    }
    return result;
  }
};

m1 = [[1, 3], [2, 5]];
m2 = [[2, 5, 3], [1, -2, -1], [1, 3, 4]];

console.log(determinant([[1]]), 1);
console.log(determinant(m1), -1);
console.log(determinant(m2), -20);