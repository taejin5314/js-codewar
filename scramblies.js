function scramble(str1, str2) {
  let temp1 = str1.split(''), temp2 = str2.split('');
  for (let i = 0; i < temp2.join().length; i++) {
    for (let j = 0; j < temp1.join().length; j++) {
      if (temp1[j] === temp2[i]) {
        temp2[i] = '';
        temp1[j] = '';
        i--;
        j--;
        console.log(temp2.join(''), j)
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