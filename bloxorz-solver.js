function bloxSolver(arr) {
  //your code goes here. you can do it!
  const startPosition = [findPositionOnMap(arr, 'B'), findPositionOnMap(arr, 'B')];
  const endPosition = findPositionOnMap(arr, 'X');
  let result = { 'direction': [], 'currentPosition': startPosition };
  let movement = 0;


  while (result.currentPosition !== endPosition) {
    console.log(result.currentPosition, result.direction)
    result = blockMove(arr, result.currentPosition, endPosition, movement, result.direction);
  }

  return result.direction;
}

function blockMove(arr, currentPosition, endPosition, movement, directionArray) {
  const xOne = currentPosition[0][0], yOne = currentPosition[0][1], xTwo = currentPosition[1][0], yTwo = currentPosition[1][1];
  let fr, fl, fu, fd;
  movement++;

  if (xOne === xTwo && yOne === yTwo) {
    if (yOne + 2 < arr.length - 1 && arr[xOne][yOne + 1] === '1' && arr[xOne][yOne + 2] === '1') {
      fr = movement + parseInt(aStarH([[xOne, yOne + 1], [xOne, yOne + 2]], endPosition));
    }
    if (yOne - 2 > 0 && arr[xOne][yOne - 1] === '1' && arr[xOne][yOne - 2] === '1') {
      fl = movement + parseInt(aStarH([[xOne, yOne - 1], [xOne, yOne - 2]], endPosition));
    }
    if (xOne + 2 < arr.length - 1 && arr[xOne + 1][yOne] === '1' && arr[xOne + 2][yOne] === '1') {
      fd = movement + parseInt(aStarH([[xOne + 1, yOne], [xOne + 2, yOne]], endPosition));
    }
    if (xOne - 2 > 0 && arr[xOne - 1][yOne] === '1' && arr[xOne - 2][yOne] === '1') {
      fu = movement + parseInt(aStarH([[xOne - 1, yOne], [xOne - 2, yOne]], endPosition));
    }
  } else {
    if (xOne !== xTwo) {
      if (yOne + 1 < arr.length - 1 && arr[xOne][yOne + 1] === '1' && arr[xTwo][yTwo + 1] === '1') {
        fr = movement + parseInt(aStarH([[xOne, yOne + 1], [xTwo, yTwo + 1]], endPosition));
        console.log(fr, movement, aStarH([[xOne, yOne + 1], [xTwo, yTwo + 1]], endPosition));
      }
      if (yOne - 1 > 0 && arr[xOne][yOne - 1] === '1' && arr[xTwo][yTwo - 1] === '1') {
        fl = movement + parseInt(aStarH([[xOne, yOne - 1], [xTwo, yTwo - 1]], endPosition));
      }
      if (Math.max(xOne, xTwo) + 1 < arr.length - 1 && arr[Math.max(xOne, xTwo) + 1][yOne] === '1') {
        fd = movement + parseInt(aStarH([[Math.max(xOne, xTwo) + 1, yOne], [Math.max(xOne, xTwo) + 1, yTwo]], endPosition));
      }
      if (Math.min(xOne, xTwo) - 1 > 0 && arr[Math.min(xOne, xTwo) - 1][yOne] === '1') {
        fu = movement + parseInt(aStarH([[Math.min(xOne, xTwo) - 1, yOne], [Math.min(xOne, xTwo) - 1, yTwo]], endPosition));
      }
    } else if (yOne !== yTwo) {
      if (Math.max(yOne, yTwo) + 1 < arr.length - 1 && arr[xOne][Math.max(yOne, yTwo) + 1] === '1') {
        fr = movement + parseInt(aStarH([[xOne, Math.max(yOne, yTwo) + 1], [xTwo, Math.max(yOne, yTwo) + 1]], endPosition));
      }
      if (Math.min(yOne, yTwo) - 1 > 0 && arr[xOne][Math.min(yOne, yTwo) - 1] === '1') {
        fl = movement + parseInt(aStarH([[xOne, Math.min(yOne, yTwo) - 1], [xTwo, Math.min(yOne, yTwo) - 1]], endPosition));
      }
      if (xOne + 1 < arr.length - 1 && arr[xOne + 1][yOne] === '1' && arr[xTwo + 1][yTwo] === '1') {
        fd = movement + parseInt(aStarH([[xOne + 1, yOne], [xTwo + 1, yTwo]], endPosition));
      }
      if (xOne - 1 > 0 && arr[xOne - 1][yOne] === '1' && arr[xTwo - 1][yTwo] === '1') {
        fu = movement + parseInt(aStarH([[xOne - 1, yOne], [xTwo - 1, yTwo]], endPosition));
      }
    }
  }

  let min = Math.min(fr ? fr : 9999, fl ? fl : 9999, fu ? fu : 9999, fd ? fd : 9999);
  switch (min) {
    case fr:
      // console.log('right');
      if (xOne === xTwo && yOne === yTwo) {
        currentPosition = [[xOne, yOne + 1], [xOne, yOne + 2]];
      } else {
        if (xOne !== xTwo) {
          currentPosition = [[xOne, yOne + 1], [xTwo, yTwo + 1]];
        } else if (yOne !== yTwo) {
          currentPosition = [[xOne, Math.max(yOne, yTwo) + 1], [xTwo, Math.max(yOne, yTwo) + 1]];
        }
      }
      directionArray.push('R');
      break;
    case fl:
      // console.log('left');
      if (xOne === xTwo && yOne === yTwo) {
        currentPosition = [[xOne, yOne - 1], [xOne, yOne - 2]];
      } else {
        if (xOne !== xTwo) {
          currentPosition = [[xOne, yOne - 1], [xTwo, yTwo - 1]];
        } else if (yOne !== yTwo) {
          currentPosition = [[xOne, Math.min(yOne, yTwo) - 1], [xTwo, Math.min(yOne, yTwo) - 1]];
        }
      }
      directionArray.push('L');
      break;
    case fu:
      // console.log('up');
      if (xOne === xTwo && yOne === yTwo) {
        currentPosition = [[xOne - 1, yOne], [xOne - 2, yOne]];
      } else {
        if (xOne !== xTwo) {
          currentPosition = [[Math.min(xOne, xTwo) - 1, yOne], [Math.min(xOne, xTwo) - 1, yTwo]];
        } else if (yOne !== yTwo) {
          currentPosition = [[xOne - 1, yOne], [xTwo - 1, yTwo]];
        }
      }
      directionArray.push('U');
      break;
    case fd:
      // console.log('down');
      if (xOne === xTwo && yOne === yTwo) {
        currentPosition = [[xOne + 1, yOne], [xOne + 2, yOne]];
      } else {
        if (xOne !== xTwo) {
          currentPosition = [[Math.max(xOne, xTwo) + 1, yOne], [Math.max(xOne, xTwo) + 1, yTwo]];
        } else if (yOne !== yTwo) {
          currentPosition = [[xOne + 1, yOne], [xTwo + 1, yTwo]];
        }
      }
      directionArray.push('D');
      break;
  }

  return { 'direction': directionArray, 'currentPosition': currentPosition };
}

function aStarH(currentPosition, endPosition) {
  // console.log('this is', currentPosition, endPosition);
  n = Math.max(Math.abs(currentPosition[0][0] - endPosition[0]), Math.abs(currentPosition[0][1] - endPosition[1]));
  n1 = Math.max(Math.abs(currentPosition[1][0] - endPosition[0]), Math.abs(currentPosition[1][1] - endPosition[1]));
  if (n === n1) return n;
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
