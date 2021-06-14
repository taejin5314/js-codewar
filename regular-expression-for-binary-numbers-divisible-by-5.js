const divisibleByFive = /^0|(101(0)*)$/; // partial solution

console.log(divisibleByFive.test(''), false);

console.log(divisibleByFive.test('101'), true);
console.log(divisibleByFive.test('1010'), true);
console.log(divisibleByFive.test('10100'), true);
console.log(divisibleByFive.test((65020).toString(2)), true);

console.log(divisibleByFive.test('10110101'), false);
console.log(divisibleByFive.test('1110001'), false);

console.log(divisibleByFive.test((21).toString(2)), false);
console.log(divisibleByFive.test((15392).toString(2)), false);
console.log(divisibleByFive.test((23573).toString(2)), false);
console.log(divisibleByFive.test((19344).toString(2)), false);

console.log(divisibleByFive.test((43936).toString(2)), false);
console.log(divisibleByFive.test((32977).toString(2)), false);
console.log(divisibleByFive.test((328).toString(2)), false);
console.log(divisibleByFive.test((5729).toString(2)), false);