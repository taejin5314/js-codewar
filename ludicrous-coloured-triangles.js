function triangle(row) {
  const arr = row.split('');
  let newString = '';
  if (arr.length === 1) return arr[0];
  else if (arr.length === 2) {
    if (arr[0] === arr[1]) return arr[0];
    else if ((arr[0] === 'B' && arr[1] === 'G') || (arr[0] === 'G' && arr[1] === 'B')) return 'R';
    else if ((arr[0] === 'R' && arr[1] === 'G') || (arr[0] === 'G' && arr[1] === 'R')) return 'B';
    else if ((arr[0] === 'B' && arr[1] === 'R') || (arr[0] === 'R' && arr[1] === 'B')) return 'G';
  } else if (arr.length > 2) {
    for (let i = 0; i < arr.length - 1; i++) {
      newString += triangle(row.slice(i, i + 2));
    }
    return triangle(newString);
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