function triangle(row) {
  while (row.length > 1) {
    let tempStr = '';
    for (let i = 0; i < row.length - 1; i++) {
      tempStr += color(row[i], row[i + 1]);
    }
    row = tempStr;
  }
  return row
}

function color(c1, c2) {
  const colors = ['B', 'G', 'R'];
  if (c1 === c2) {
    return c1;
  }
  else {
    return colors.filter(c => (c !== c1) && (c !== c2))[0];
  }
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