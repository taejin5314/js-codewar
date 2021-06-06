function sortVowels(s) {
  //code
  if (typeof s === 'undefined' || typeof s === 'null' || typeof s === 'number') return '';
  let arrays = s.split('');
  let newArr = '';
  arrays.map((elm) => {
    if ((/[aeiou]$/i).test(elm)) {
      newArr += '|' + elm;
    } else newArr += elm + '|';
    newArr += '\n';
  })
  return newArr.slice(0, -1);
}

console.log(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
console.log(sortVowels('Rnd Te5T'), 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|');
console.log(sortVowels(1337), '');
console.log(sortVowels(undefined), '');