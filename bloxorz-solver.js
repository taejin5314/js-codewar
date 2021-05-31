function bloxSolver(arr) {
  //your code goes here. you can do it!
  const startPosition = [findPositionOnMap(arr, 'B'), findPositionOnMap(arr, 'B')];
  const endPosition = findPositionOnMap(arr, 'X');
  let movement = 0;

  console.log(startPosition);
  console.log(endPosition);
  console.log(blockMove(arr, [[1, 2], [1, 3]], endPosition, movement, []))
}

function blockMove(arr, currentPosition, endPosition, movement, directionArray) {
  const direction = ['R', 'L', 'U', 'D'];
  const xOne = currentPosition[0][0], yOne = currentPosition[0][1], xTwo = currentPosition[1][0], yTwo = currentPosition[1][1];
  let fr, fl, fu, fd;
  movement++;

  if (xOne === xTwo && yOne === yTwo) {
    if (yOne + 2 < arr.length - 1 && arr[xOne][yOne + 1] === '1' && arr[xOne][yOne + 2] === '1') fr = movement + parseInt(aStarH([[xOne, yOne + 1], [xOne, yOne + 2]], endPosition));
    if (yOne - 2 > 0 && arr[xOne][yOne - 1] === '1' && arr[xOne][yOne - 2] === '1') fl = movement + parseInt(aStarH([[xOne, yOne - 1], [xOne, yOne - 2]], endPosition));
    if (xOne + 2 < arr.length - 1 && arr[xOne + 1][yOne] === '1' && arr[xOne + 2][yOne] === '1') fd = movement + parseInt(aStarH([[xOne + 1, yOne], [xOne + 2, yOne]], endPosition));
    if (xOne - 2 > 0 && arr[xOne - 1][yOne] === '1' && arr[xOne - 2][yOne] === '1') fu = movement + parseInt(aStarH([[xOne - 1, yOne], [xOne - 2, yOne]], endPosition));
  } else {
    if (xOne !== xTwo) {
      if (yOne + 1 < arr.length - 1 && arr[xOne][yOne + 1] === '1' && arr[xTwo][yTwo + 1] === '1') fr = movement + parseInt(aStarH([[xOne, yOne + 1], [xTwo, yTwo + 1]], endPosition));
      if (yOne - 1 > 0 && arr[xOne][yOne - 1] === '1' && arr[xTwo][yTwo - 1] === '1') fl = movement + parseInt(aStarH([[xOne, yOne + 1], [xTwo, yTwo + 1]], endPosition));
      if (Math.max(xOne, xTwo) + 1 < arr.length - 1 && arr[Math.max(xOne, xTwo) + 1][yOne] === '1') fd = movement + parseInt(aStarH([[Math.max(xOne, xTwo) + 1, yOne], [Math.max(xOne, xTwo) + 1, yTwo]], endPosition));
      if (Math.min(xOne, xTwo) - 1 > 0 && arr[Math.min(xOne, xTwo) - 1][yOne] === '1') fu = movement + parseInt(aStarH([[Math.min(xOne, xTwo) - 1, yOne], [Math.min(xOne, xTwo) - 1, yTwo]], endPosition));
    } else if (yOne !== yTwo) {
      if (Math.max(yOne, yTwo) + 1 < arr.length - 1 && arr[xOne][Math.max(yOne, yTwo) + 1] === '1') fr = movement + parseInt(aStarH([[xOne, Math.max(yOne, yTwo) + 1], [xTwo, Math.max(yOne, yTwo) + 1]], endPosition));
      if (Math.min(yOne, yTwo) - 1 > 0 && arr[xOne][Math.min(yOne, yTwo) - 1] === '1') fl = movement + parseInt(aStarH([[xOne, Math.min(yOne, yTwo) - 1], [xTwo, Math.min(yOne, yTwo) - 1]], endPosition));
      if (xOne + 1 < arr.length - 1 && arr[xOne + 1][yOne] === '1' && arr[xTwo + 1][yTwo] === '1') fd = movement + parseInt(aStarH([[xOne + 1], [xTwo + 1][yTwo]], endPosition));
      if (xOne - 1 > 0 && arr[xOne - 1][yOne] === '1' && arr[xTwo - 1][yTwo] === '1') fu = movement + parseInt(aStarH([[xOne - 1][yOne], [xTwo - 1][yTwo]], endPosition));
    }
  }

  return [fr, fl, fu, fd];
}

function aStarH(currentPosition, endPosition) {
  n = Math.max(Math.abs(currentPosition[0][0] - endPosition[0]), Math.abs(currentPosition[0][1] - endPosition[1]));
  n1 = Math.max(Math.abs(currentPosition[1][0] - endPosition[0]), Math.abs(currentPosition[1][1] - endPosition[1]));
  return [n, n1];
}

function findPositionOnMap(board, target) {
  const matchedRows = board.filter(row => row.search(target) >= 0);
  if (matchedRows.length === 1) return [board.indexOf(matchedRows[0]), matchedRows[0].indexOf(target)]
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
