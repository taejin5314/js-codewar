function checkWord(board, word) {
  const startPoint = word[0];
  let result = false, direction = [];

  // console.log([[1, 2], [1, 3], [2, 1]].findIndex(elm => JSON.stringify(elm) === JSON.stringify([2, 1])))

  const checkAdjacent = (board, target, i, j) => {
    if (target.length === 0) {
      result = true;
      return;
    }
    else {
      if ((i > 0 && j > 0) && board[i - 1][j - 1] === target[0] && direction.findIndex(elm => JSON.stringify(elm) === JSON.stringify([i - 1, j - 1])) === -1) {
        direction.push([i - 1, j - 1]);
        checkAdjacent(board, target.slice(1), i - 1, j - 1);
      }
      if (i > 0 && board[i - 1][j] === target[0] && direction.findIndex(elm => JSON.stringify(elm) === JSON.stringify([i - 1, j])) === -1) {
        direction.push([i - 1, j])
        checkAdjacent(board, target.slice(1), i - 1, j);
      }
      if ((i > 0 && j < board[i].length - 1) && board[i - 1][j + 1] === target[0] && direction.findIndex(elm => JSON.stringify(elm) === JSON.stringify([i - 1, j + 1])) === -1) {
        direction.push([i - 1, j + 1])
        checkAdjacent(board, target.slice(1), i - 1, j + 1);
      }
      if (j > 0 && board[i][j - 1] === target[0] && direction.findIndex(elm => JSON.stringify(elm) === JSON.stringify([i, j - 1])) === -1) {
        direction.push([i, j - 1])
        checkAdjacent(board, target.slice(1), i, j - 1);
      }
      if (j < board[i].length - 1 && board[i][j + 1] === target[0] && direction.findIndex(elm => JSON.stringify(elm) === JSON.stringify([i, j + 1])) === -1) {
        direction.push([i, j + 1])
        checkAdjacent(board, target.slice(1), i, j + 1);
      }
      if ((i < board.length - 1 && j > 0) && board[i + 1][j - 1] === target[0] && direction.findIndex(elm => JSON.stringify(elm) === JSON.stringify([i + 1, j - 1])) === -1) {
        direction.push([i + 1, j - 1])
        checkAdjacent(board, target.slice(1), i + 1, j - 1);
      }
      if (i < board.length - 1 && board[i + 1][j] === target[0] && direction.findIndex(elm => JSON.stringify(elm) === JSON.stringify([i + 1, j])) === -1) {
        direction.push([i + 1, j])
        checkAdjacent(board, target.slice(1), i + 1, j);
      }
      if ((i < board.length - 1 && j < board[i].length - 1) && board[i + 1][j + 1] === target[0] && direction.findIndex(elm => JSON.stringify(elm) === JSON.stringify([i + 1, j + 1])) === -1) {
        direction.push([i + 1, j + 1]);
        checkAdjacent(board, target.slice(1), i + 1, j + 1);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (startPoint === board[i][j]) {
        direction.push([i, j]);
        checkAdjacent(board, word.slice(1), i, j);
      }
    }
  }

  return result;
}


var testBoard = [
  ["E", "A", "R", "A"],
  ["N", "L", "E", "C"],
  ["I", "A", "I", "S"],
  ["B", "Y", "O", "R"]
];

console.log(checkWord(testBoard, "C"), true);
console.log(checkWord(testBoard, "EAR"), true);
console.log(checkWord(testBoard, "EARS"), false);
console.log(checkWord(testBoard, "BAILER"), true);
console.log(checkWord(testBoard, "RSCAREIOYBAILNEA"), true, "Must be able to check indefinite word lengths going in all directions");
console.log(checkWord(testBoard, "CEREAL"), false, "Valid guesses can't overlap themselves");
console.log(checkWord(testBoard, "ROBES"), false, "Valid guesses have to be adjacent");
console.log(checkWord(testBoard, "BAKER"), false, "All the letters have to be in the board");
console.log(checkWord(testBoard, "CARS"), false, "Valid guesses cannot wrap around the edges of the board");