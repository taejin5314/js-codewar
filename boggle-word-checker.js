function checkWord(board, word) {
  const startPoint = word[0];
  return startPoint
}

var testBoard = [
  ["E", "A", "R", "A"],
  ["N", "L", "E", "C"],
  ["I", "A", "I", "S"],
  ["B", "Y", "O", "R"]
];

console.log(checkWord(testBoard, "C") == true);
console.log(checkWord(testBoard, "EAR") == true);
console.log(checkWord(testBoard, "EARS") == false);
console.log(checkWord(testBoard, "BAILER") == true);
console.log(checkWord(testBoard, "RSCAREIOYBAILNEA") == true, "Must be able to check indefinite word lengths going in all directions");
console.log(checkWord(testBoard, "CEREAL") == false, "Valid guesses can't overlap themselves");
console.log(checkWord(testBoard, "ROBES") == false, "Valid guesses have to be adjacent");
console.log(checkWord(testBoard, "BAKER") == false, "All the letters have to be in the board");
console.log(checkWord(testBoard, "CARS") == false, "Valid guesses cannot wrap around the edges of the board");