function scramble(str1, str2) {
  let temp1 = str1.split(''), temp2 = str2.split('');
  for (let i = 0; i < temp1.length; i++) {
    for (let j = 0; j < temp2.length; j++) {
      if (str1[i] === str2[j]) {
        temp1[i] = '';
        temp2[j] = '';
      }
    }
  }
  if (temp2.length === 0) return true;
  return false;
}
