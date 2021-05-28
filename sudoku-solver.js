function sudoku(puzzle) {
  let solvedPuzzle = [];
  const emptyArray = whereIsEmptyPoint(puzzle, []);
  fillInEmpty(0, emptyArray, puzzle)
  return solvedPuzzle;

  function fillInEmpty(count, emptyArray, puzzle) {
    if (count === emptyArray.length) {
      for (let i = 0; i < puzzle.length; i++) {
        let row = [];
        for (let j = 0; j < puzzle[i].length; j++) {
          row.push(puzzle[i][j]);
        }
        solvedPuzzle.push(row);
      }
      return solvedPuzzle;
    }

    const x = emptyArray[count][1];
    const y = emptyArray[count][0];

    for (let i = 1; i <= 9; i++) {
      if (checkNumber(x, y, i, puzzle)) {
        puzzle[y][x] = i;
        fillInEmpty(count + 1, emptyArray, puzzle)
        puzzle[y][x] = 0;
      }
    }
  }
}
function whereIsEmptyPoint(puzzle, emptyArray) {
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      if (puzzle[i][j] === 0) emptyArray.push([i, j]);
    }
  }
  return emptyArray;
}

function checkNumber(x, y, num, puzzle) {
  for (let i = 0; i < 9; i++) {
    if (num === puzzle[y][i]) return false;
  }

  for (i = 0; i < 9; i++) {
    if (num === puzzle[i][x]) return false;
  }

  const x_ = Math.floor(x / 3) * 3;
  const y_ = Math.floor(y / 3) * 3;
  for (i = y_; i < y_ + 3; i++) {
    for (let j = x_; j < x_ + 3; j++) {
      if (num === puzzle[i][j]) return false;
    }
  }
  return true;
}

var puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]];

console.log(sudoku(puzzle));