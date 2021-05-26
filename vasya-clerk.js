function tickets(peopleInLine) {
  let quarterCount = 0;
  let halfCount = 0;
  let fullCount = 0;
  let total = 0;
  for (const money of peopleInLine) {
    if (money === 25) quarterCount++;
    else if (money === 50) {
      if (quarterCount >= 1) quarterCount--;
      else return "NO";
      halfCount++;
    }
    else if (money === 100) {
      if (halfCount >= 1 && quarterCount >= 1) {
        halfCount--;
        quarterCount--;
      } else if (quarterCount >= 3) {
        quarterCount -= 3;
      } else return "NO";
      fullCount++;
    }
  }
  return "YES";
}