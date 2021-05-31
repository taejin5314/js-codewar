function bloxSolver(arr) {
  //your code goes here. you can do it!
  const startPosition = findPositionOnMap(arr, 'B');
  const endPosition = findPositionOnMap(arr, 'X');
  console.log(startPosition);
  console.log(endPosition);
}

function findPositionOnMap(board, target) {
  const matchedRows = board.filter(row => row.search(target) >= 0);

  if (matchedRows.length === 1) return [[board.indexOf(matchedRows[0]), matchedRows[0].indexOf(target)]]
}

console.log(bloxSolver(['1110000000',
  '1B11110000',
  '1111111110',
  '0111111111',
  '0000011X11',
  '0000001110']), 'RRDRRRD')

console.log(bloxSolver(['000000111111100',
  '111100111001100',
  '111111111001111',
  '1B11000000011X1',
  '111100000001111',
  '000000000000111']), 'ULDRURRRRUURRRDDDRU');

console.log(bloxSolver(['00011111110000',
  '00011111110000',
  '11110000011100',
  '11100000001100',
  '11100000001100',
  '1B100111111111',
  '11100111111111',
  '000001X1001111',
  '00000111001111']), 'ULURRURRRRRRDRDDDDDRULLLLLLD');
console.log(bloxSolver(['11111100000',
  '1B111100000',
  '11110111100',
  '11100111110',
  '10000001111',
  '11110000111',
  '11110000111',
  '00110111111',
  '01111111111',
  '0110011X100',
  '01100011100']), 'DRURURDDRRDDDLD')
console.log(bloxSolver(['000001111110000',
  '000001001110000',
  '000001001111100',
  'B11111000001111',
  '0000111000011X1',
  '000011100000111',
  '000000100110000',
  '000000111110000',
  '000000111110000',
  '000000011100000']), 'RRRDRDDRDDRULLLUULUUURRRDDLURRDRDDR')
