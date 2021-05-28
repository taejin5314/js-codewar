function rectangleRotation(a, b) {
  //coding and coding.. 
  let xaxis = Math.floor(a / Math.sqrt(2));
  let yaxis = Math.floor(b / Math.sqrt(2));
  return xaxis * (yaxis * 2 + 1) + yaxis + 1;
}

console.log(rectangleRotation(6, 4), 23)
console.log(rectangleRotation(30, 2), 65)
console.log(rectangleRotation(8, 6), 49)
console.log(rectangleRotation(16, 20), 333)