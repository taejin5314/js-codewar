function listPosition(word) {
  //Return the anagram list position of the word
  return 1;
}

var testValues = { 'A': 1, 'ABAB': 2, 'AAAB': 1, 'BAAA': 4, 'QUESTION': 24572, 'BOOKKEEPER': 10743 };
for (var word in testValues) {
  console.log(listPosition(word), testValues[word], 'Incorrect list position for: ' + word);
}