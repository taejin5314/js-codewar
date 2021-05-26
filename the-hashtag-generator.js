function generateHashtag(str) {
  let trimmedStr = str.trim();
  let arr = trimmedStr.split(' ');
  if (trimmedStr.length === 0) return false;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    if (arr[i].length > 140) return false;
  }
  return "#" + arr.join('');
}

console.log(generateHashtag(""), false, "Expected an empty string to return false")
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag('    a    '))