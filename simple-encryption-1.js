function encrypt(text, n) {
  if (text === null) return text;
  for (let i = 0; i < n; i++) {
    let newStr = '', remain = '';
    text.split('').map((elm, index) => {
      if (index % 2 === 1) newStr += elm;
      else remain += elm;
    })
    text = newStr.concat(remain);
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (encryptedText === null) return encryptedText;
  for (let i = 0; i < n; i++) {
    let newStr = '';
    if (encryptedText.length % 2 === 0) {
      for (let j = 0; j < encryptedText.length / 2; j++) {
        newStr += encryptedText[Math.floor(encryptedText.length / 2) + j];
        newStr += encryptedText[j];
      }
    } else {
      for (let j = 0; j < Math.floor(encryptedText.length / 2); j++) {
        newStr += encryptedText[Math.floor(encryptedText.length / 2) + j];
        newStr += encryptedText[j];
      }
      newStr += encryptedText[encryptedText.length - 1];
    }
    encryptedText = newStr;
  }
  return encryptedText;
}

console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
console.log(encrypt("This is a test!", 3), " Tah itse sits!");
console.log(encrypt("This is a test!", 4), "This is a test!");
console.log(encrypt("This is a test!", -1), "This is a test!");
console.log(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");