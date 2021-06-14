function listPosition(word) {
  const sortedLetters = word.split('').sort();
  return calculatePermutations(word);
  return word.split('').reduce((acc, letter) => {
    const index = sortedLetters.indexOf(letter)

    sortedLetters.splice(index, 1)

    const lettersAhead = [...new Set(sortedLetters.slice(0, index))]

    return (
      acc +
      lettersAhead.reduce(
        (a, l) =>
          a + calculatePermutations(sortedLetters.join('').replace(l, letter)),
        0
      )
    )
  }, 1)
}

function calculatePermutations(word) {
  const f = factorial(word.length).toString();

  const letterCountsMap = getLetterCountsMap(word);

  const dividerF = Object.values(letterCountsMap).reduce((acc, letterCount) => acc * factorial(letterCount), 1)

  return f / dividerF
}

function getLetterCountsMap(word) {
  return word.split('').reduce((acc, letter) => {
    acc[letter] = acc[letter] ? acc[letter] + 1 : 1;
    return acc;
  }, {})
}

function factorial(n) {
  let f = [1, 1]
  if (f[n] !== undefined) return f[n];

  for (i = 2; i <= n; i++) {
    f[i] = f[i - 1] * i;
  }

  return f[n]
}


var testValues = { 'A': 1, 'ABAB': 2, 'AAAB': 1, 'BAAA': 4, 'QUESTION': 24572, 'BOOKKEEPER': 10743 };
for (var word in testValues) {
  console.log(listPosition(word), testValues[word], 'Incorrect list position for: ' + word);
}