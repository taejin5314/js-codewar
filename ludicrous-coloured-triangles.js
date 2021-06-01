function triangle(row) {
  let sum = 0;
  const n = row.length;


}

function numToString(i) {
  switch (i) {
    case 0: return 'R';
    case 1: return 'G';
    case 2: return 'B';
    default: return '\0';
  }
}

function StringToNum(c) {
  switch (c) {
    case 'R': return 0;
    case 'G': return 1;
    case 'B': return 2;
    default: return 3;
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