const colors = ["R", "G", "B"];

function triangle(row) {
  console.log(row);
  const triangleLength = row.length;
  const n = Math.floor(Math.log(triangleLength) / Math.log(3));
  const max = Math.pow(3, n) + 1;

  if (triangleLength === 1) return row[0];
  if (triangleLength === max) return colorCheck(row[0], row[triangleLength - 1]);

  const size = triangleLength - max + 1;
  const firstColor = triangle(row.substring(0, size));
  const secondColor = triangle(row.substring(triangleLength - size));

  return colorCheck(firstColor, secondColor);
}

function colorCheck(color1, color2) {
  if (color1 === color2) return color1;
  return colors.find(color => color !== color1 && color !== color2);
}

console.log(triangle('B'), 'B');
console.log(triangle('GB'), 'R');
console.log(triangle('RRR'), 'R')
console.log(triangle('RGBG'), 'B')
console.log(triangle('RBRGBRB'), 'G')
console.log(triangle('RBRGBRBGGRRRBGBBBGG'), 'G')
console.log(triangle('BGRGRBGBRRBBGRBGBBRBRGBRG'), 'B')
console.log(triangle('GRBGRRRBGRBGRGBRGBRBRGBRRGRBGRGBB'), 'R');
console.log(triangle('RBGRBGBRGBRBRGGRBBGRBGBRBBGRBGGBRBGBBGRBGBRGRBGRBB'), 'G');
console.log(triangle('BGBGRBGRRBGRBGGGRBGRGBGRRGGRBGRGRBGBRGBGBGRGBGBGBGRRBRGRRGBGRGBRGRBGRBGRBBGBRGRGRBGRGBRGBBRGGBRBGGRB'), 'G');