function checkWord(board, word) {
  const startPoint = word[0];
  let index = 0;

  for (let i = 0; i < board.legnth; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (startPoint === board[i][j]) { }
    }
  }

  return startPoint
}

const checkAdjacent = (board, target, i, j) => {

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
console.log(checkWord(testBoard, "RSCAREIOYBAILNEA") == true, "Must be able to check indefinite word lengths going in all directions");
console.log(checkWord(testBoard, "CEREAL"), "Valid guesses can't overlap themselves");
console.log(checkWord(testBoard, "ROBES"), "Valid guesses have to be adjacent");
console.log(checkWord(testBoard, "BAKER"), "All the letters have to be in the board");
console.log(checkWord(testBoard, "CARS"), "Valid guesses cannot wrap around the edges of the board");