function bouncingBall(h, bounce, window) {
  let result = 0;
  if (h > 0 && 0 < bounce && bounce < 1 && window < h) {
    while (h > window) {
      result++;
      h *= bounce;
      if (h > window) result++;
    }
    return result;
  }
  return -1;
}

console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
console.log(bouncingBall(3, 1, 1.5))