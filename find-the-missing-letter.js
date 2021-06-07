function findMissingLetter(array) {
  const alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let startingPoint = alph.indexOf(array[0]);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== alph[startingPoint + i]) {
      return alph[startingPoint + i];
    }
  }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');