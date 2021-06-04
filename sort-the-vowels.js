function sortVowels(s) {
  //code
  if (typeof s === 'undefined' || typeof s === 'null' || typeof s === 'number') return '';
  let arr = s.split('');
  for (elm of arr) {
    let match = elm.match(/[a-z]|[A-Z]/);
    console.log(match[0]);
  }
}

console.log(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
console.log(sortVowels('Rnd Te5T'), 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|');
console.log(sortVowels(1337), '');
console.log(sortVowels(undefined), '');