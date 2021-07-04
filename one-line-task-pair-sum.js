sum10 = s => s.match(/\d\?{3,3}\d/)

console.log(sum10("arrb6???4xxbl5???eee5abc"), true);
console.log(sum10("abc6? ?4"), false);
console.log(sum10("no digit no pair"), false);
console.log(sum10("1 digit still no pair"), false);
console.log(sum10("2 digits but no question marks still no pair 8"), false);
console.log(sum10("1"), false);
console.log(sum10("1???9"), true);
console.log(sum10("1????9"), false);
console.log(sum10("1??????9"), false);
console.log(sum10("1x?x?x?9"), true);
console.log(sum10("1???9???1"), true);
console.log(sum10("1??9?9"), false);
console.log(sum10("1x?x?x9x?x9"), false);
console.log(sum10("1???9???1???9"), true);
console.log(sum10("1???x9?x??1"), true);
console.log(sum10("1???x9 9?x??1"), true);
console.log(sum10("1???x9??1"), false);
console.log(sum10("1xx2???8"), true);
console.log(sum10("1xx9???9"), false);
console.log(sum10("1???9xx1"), true);