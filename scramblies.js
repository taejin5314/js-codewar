function scramble(str1, str2) {
  let temp1 = str1.split(''), temp2 = str2.split('');
  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (temp1[j] === temp2[i]) {
        temp2[i] = '';
        // i === 0 ? i = 0 : i--;
        temp1[j] = '';
        // j === 0 ? j = 0 : j--;
        // console.log(temp2.join(''), i, j)
        break;
      }
    }
  }
  if (temp2.join('').length === 0) return true;
  return false;
}

console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava', 'javascript'), true);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);
console.log(scramble('aaaab', 'aaaaaaaaaaabbbb'))
console.log(scramble('awegaweawegaweherhaerjerjaerjaerjaerj', 'aweawfaoijozixjvoizxjoivjzxoijvoijoisjfooiaejofiawejoifjoixzjoi'))