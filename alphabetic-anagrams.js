function listPosition(word) {
}

function calculatePermutations(word) {
}

function letterCount(word) {
  return word.split('').reduce((acc, letter) => {
    acc[letter] = acc[letter] ? acc[letter] + 1 : 1;
    return acc;
  }, {})
}

function factorial(n) {
  let factor = [1, 1]
  if (factor[n] !== undefined) return factor[n];

  for (i = 2; i <= n; i++) {
    factor[i] = factor[i - 1] * i;
  }

  return factor[n]
}


var testValues = { 'A': 1, 'ABAB': 2, 'AAAB': 1, 'BAAA': 4, 'QUESTION': 24572, 'BOOKKEEPER': 10743 };
for (var word in testValues) {
  console.log(listPosition(word), testValues[word], 'Incorrect list position for: ' + word);
}