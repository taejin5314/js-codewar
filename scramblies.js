function scramble(str1, str2) {
  let temp1 = getCharFrequencies(str1), temp2 = getCharFrequencies(str2);
  let count = 0;

  for (key of Object.keys(temp2)) {
    if (temp1[key] >= temp2[key]) continue;
    else return false;
  }
  return true;
}

function getCharFrequencies(str) {
  return str.split("").reduce(
    function (container, char) {
      (container[char] += 1) || (container[char] = 1);
      return container;
    },
    {});
}

console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava', 'javascript'), true);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);
console.log(scramble('aaaaab', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbb'))