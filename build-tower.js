function towerBuilder(nFloors) {
  if (nFloors === 1) return ["*"];
  let result = [];
  for (let i = 0; i < nFloors; i++) {
    let stars = '';
    for (let j = 0; j < nFloors * 2 - 1; j++) {
      if ((nFloors - i) - 1 <= j && j < (nFloors + i)) stars += '*';
      else stars += ' ';
    }
    result.push(stars);
  }
  return result;
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);