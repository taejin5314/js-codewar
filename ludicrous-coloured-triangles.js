const colors = ["R", "G", "B"];

function combineColors(color1, color2) {
  if (color1 === color2) {
    return color1;
  }

  return colors.find(color => color !== color1 && color !== color2);
}

function log3(x) {
  return Math.log(x) / Math.log(3);
}

function triangle(row) {
  const { length } = row;

  if (length === 1) {
    return row[0];
  }

  const n = Math.floor(log3(length - 1));
  const idealLength = Math.pow(3, n) + 1;

  if (length === idealLength) {
    return combineColors(row[0], row[length - 1]);
  }

  const size = length - idealLength + 1;
  const firstColor = triangle(row.substring(0, size));
  const secondColor = triangle(row.substring(length - size));

  return combineColors(firstColor, secondColor);
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