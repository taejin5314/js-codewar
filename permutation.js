function permutations(string) {
  let result = [];

  const permute = (str, temp = '') => {
    let array = str.split('');
    if (array.length === 0) {
      result.push(temp);
    } else {
      for (let i = 0; i < array.length; i++) {
        let cur = array.slice();
        let next = cur.splice(i, 1);
        permute(cur.slice().join(''), temp + next.join(''));
      }
    }
  }

  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  permute(string);
  return result.filter(unique)
}

console.log(permutations('a'), ['a']);
console.log(permutations('ab').sort(), ['ab', 'ba'].sort());
console.log(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());