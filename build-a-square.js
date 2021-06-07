function generateShape(integer) {
  let square = '';
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      square += '+';
    }
    square += '\n';
  }
  return square.slice(0, -1);
}

console.log(generateShape(8), '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++');