function triangle(row) {
  return row;
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