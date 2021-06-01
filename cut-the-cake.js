function cut(cake) {
  //coding and coding..
  const num = cake.match(/o/g).length;
  const cake_array = cake.split('\n').map(e => e.split(''));
  const rows = cake_array.length;
  const cols = cake_array[0].length;
  const size = (rows * cols) / num;

  return run(cake_array, size, []);
}

function run(cake, size, slices) {
  const corner = findFirstTopLeftCorner(cake);

  if (null == corner) return slices;

  let x = corner[1];
  let y = corner[0];

  for (let width = size; width >= 1; width--) {
    for (let height = 1; height <= size; height++) {
      if ((height * width) !== size) continue;

      const slice = isAValidSlice(cake, x, y, width, height);
      if (!slice) continue;

      const newSlices = Object.assign([], slices);
      newSlices.push(slice);

      let newCake = doCut(JSON.parse(JSON.stringify(cake)), x, y, width, height);

      let r = run(newCake, size, newSlices);

      if (r.length) {
        return r;
      }
    }
  }

  return [];
}

function stringyfy(cake) {
  return cake.map(e => e.join('')).join('\n');
}

function findFirstTopLeftCorner(cake) {
  for (let i = 0; i < cake.length; i++) {
    for (let j = 0; j < cake[i].length; j++) {
      if (cake[i][j] !== 'x') return [i, j];
    }
  }
}

function isAValidSlice(cake, x, y, width, height) {
  if ((x + width) > cake[0].length) return false;
  if ((y + height) > cake.length) return false;

  const slice = cake.slice(y, y + height).map(e => e.slice(x, x + width));
  const slice_str = stringyfy(slice);

  if (slice_str.match(/x/)) {
    return false;
  }

  const numberOfO = (slice_str.match(/o/g) || []).length;
  if (numberOfO != 1) {
    return false;
  }

  return slice_str;
}

function doCut(cake, x, y, width, height) {
  for (let i = y; i < (y + height); i++) {
    for (let j = x; j < (x + width); j++) {
      cake[i][j] = 'x';
    }
  }
  return cake;
}

var cake =
  `........
..o.....
...o....
........`

var result =
  [
    `........
..o.....`,

    `...o....
........`
  ]
console.log(cut(cake), result)

var cake =
  `.o......
......o.
....o...
..o.....`

var result =
  [
    `.o......`,

    `......o.`,

    `....o...`,

    `..o.....`
  ]
console.log(cut(cake), result)

var cake =
  `.o.o....
........
....o...
........
.....o..
........`

var result =
  [
    `.o
..
..
..
..
..`,

    `.o....
......`,

    `..o...
......`,

    `...o..
......`,
  ]
console.log(cut(cake), result)

var cake =
  `.o.o....
.o.o....
........
........`

var result = []
console.log(cut(cake), result)

var cake =
  `.o....o.
.o....o.
........
o..oo..o`

var result = [
  `.o..`,
  `..o.`,
  `.o..`,
  `..o.`,
  `..
o.`,
  `..
.o`,
  `..
o.`,
  `..
.o`
]
console.log(cut(cake), result)

//A complex example ;-)
var cake =
  `................
.....o..........
................
...............o
................
................
................
.....o..o.....o.
................
................
...o............
................
................
...............o
................
.o..............`
var result = [
  '................\n' +
  '.....o..........',

  '................\n' +
  '...............o',

  '........\n' +
  '........\n' +
  '........\n' +
  '.....o..',

  '....\n' +
  '....\n' +
  '....\n' +
  'o...\n' +
  '....\n' +
  '....\n' +
  '....\n' +
  '....',

  '....\n' +
  '....\n' +
  '....\n' +
  '..o.\n' +
  '....\n' +
  '....\n' +
  '....\n' +
  '....',

  '........\n' +
  '........\n' +
  '...o....\n' +
  '........',

  '................\n' +
  '...............o',

  '................\n' +
  '.o..............']
console.log(cut(cake), result)

var cake =
  `.o...
.....
.....
...o.
.....`

var result = []
console.log(cut(cake), result)