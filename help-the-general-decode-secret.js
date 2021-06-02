console.log(device.encode('What is this ?'));
console.log(device.encode('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))
console.log(device.encode('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'));
console.log(device.encode('Hey'))
console.log('Hey'.split('').map(function (a) {
  return device.encode(a);
}).join(''));
console.log(device.encode('!@#$%^&*()_+-'));
console.log('abcdefghijklmnopqrstuvwxyz');
console.log('abcdefghijklmnopqrstuvwxyz'.split('').map(function (a) {
  return device.encode(a);
}).join(''));
console.log('abcdefghijklmnopqrstuvwxyz'.split('').map(function (a) {
  return device.encode('_' + a)[1];
}).join(''));
console.log('abcdefghijklmnopqrstuvwxyz'.split('').map(function (a) {
  return device.encode('__' + a)[2];
}).join(''));
console.log('abcdefghijklmnopqrstuvwxyz'.split('').map(function (a) {
  return device.encode('___' + a)[3];
}).join(''));
console.log('abcdefghijklmnopqrstuvwxyz'.split('').map(function (a) {
  return device.encode('____' + a)[4];
}).join(''));
console.log('abcdefghijklmnopqrstuvwxyz'.split('').map(function (a) {
  return device.encode('_____' + a)[5];
}).join(''));
console.log('abcdefghijklmnopqrstuvwxyz'.split('').map(function (a) {
  return device.encode('______' + a)[6];
}).join(''));
console.log('abcdefghijklmnopqrstuvwxyz'.split('').map(function (a) {
  return device.encode('_______' + a)[7];
}).join(''));
device.decode = function (w) {
  const alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? ';
  const max = w.length;
  let temp = new Array(max);
  let test, out = Array(max);

  for (let i = 0; i < 67; i++) {
    for (let j = 0; j < max; j++) {
      temp[j] = alph[i];
    }
    test = device.encode(temp.join(''));

    for (j = 0; j < max; j++) {
      if (w[j] === '-') out[j] = w[j];
      if (w[j] === test[j]) out[j] = temp[j];
    }
  }
  return out.join('');
}