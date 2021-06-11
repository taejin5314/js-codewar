function checkWord(board, word) {
  const startPoint = word[0];
  let result;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (startPoint === board[i][j]) {
        result = checkAdjacent(board, word.slice(1), i, j);
      }
    }
  }

  return result;
}

const checkAdjacent = (board, target, i, j) => {
  if (target.length === 0) return true;
  else {
    if ((i > 0 && j > 0) && board[i - 1][j - 1] === target[0]) return checkAdjacent(board, target.slice(1), i - 1, j - 1);
    else if (i > 0 && board[i - 1][j] === target[0]) return checkAdjacent(board, target.slice(1), i - 1, j);
    else if ((i > 0 && j < board[i].length - 1) && board[i - 1][j + 1] === target[0]) return checkAdjacent(board, target.slice(1), i - 1, j + 1);
    else if (j > 0 && board[i][j - 1] === target[0]) return checkAdjacent(board, target.slice(1), i, j - 1);
    else if (j < board[i].length - 1 && board[i][j + 1] === target[0]) return checkAdjacent(board, target.slice(1), i, j + 1);
    else if (i < board.length - 1 && board[i + 1][j - 1] === target[0]) return checkAdjacent(board, target.slice(1), i + 1, j - 1);
    else if (i < board.length - 1 && board[i + 1][j] === target[0]) return checkAdjacent(board, target.slice(1), i + 1, j);
    else if ((i < board.length - 1 && j < board[i].length - 1) && board[i + 1][j + 1] === target[0]) return checkAdjacent(board, target.slice(1), i + 1, j + 1);
  }
  return false;
}

var testBoard = [
  ["E", "A", "R", "A"],
  ["N", "L", "E", "C"],
  ["I", "A", "I", "S"],
  ["B", "Y", "O", "R"]
];

console.log(checkWord(testBoard, "C"));
console.log(checkWord(testBoard, "EAR"));
console.log(checkWord(testBoard, "EARS"));
console.log(checkWord(testBoard, "BAILER"));
console.log(checkWord(testBoard, "RSCAREIOYBAILNEA"), "Must be able to check indefinite word lengths going in all directions");
console.log(checkWord(testBoard, "CEREAL"), "Valid guesses can't overlap themselves");
console.log(checkWord(testBoard, "ROBES"), "Valid guesses have to be adjacent");
console.log(checkWord(testBoard, "BAKER"), "All the letters have to be in the board");
console.log(checkWord(testBoard, "CARS"), "Valid guesses cannot wrap around the edges of the board");