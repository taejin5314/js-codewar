function cut(cake) {
  //coding and coding..
  const num = cake.match(/o/g).length;
  const cake_array = cake.split('\n').map(e => e.split(''));
  const rows = cake_array.length;
  const cols = cake_array[0].length;
  const size = (rows * cols) / num;

  run(cake_array, size, []);
}

function run(cake, size, slices) {
  console.log(slices);
  console.log(stringyfy(cake));
}

function stringyfy(cake) {
  return cake.map(e => e.join('')).join('\n');
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