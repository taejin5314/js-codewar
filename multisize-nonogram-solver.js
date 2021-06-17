function solve(clues, width, height) {
  const h_clues = clues[0], v_clues = clues[1], h = clues[2], v = clues[3];
  console.log(clues);
}

const doTests = (puzzles, desc) => {
  for (let i = 0, len = puzzles.length; i < len; i++) {
    let [args, solution, it_] = puzzles[i];
    solve(...args);
    // console.log(solve(...args), solution);
  }
};

function getPuzzles() {

  var v_clues, h_clues, args, ans, t1, t2, t3, tests;

  h_clues = [
    [1, 1],
    [4],
    [1, 1, 1],
    [3],
    [1]
  ],
    v_clues = [
      [1],
      [2],
      [3],
      [2, 1],
      [4]
    ],
    args = [
      [h_clues, v_clues], 5, 5
    ],

    ans = [
      [0, 0, 1, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 0, 1, 0],
      [0, 1, 1, 1, 1]
    ],

    t1 = [args, ans, '5 x 5 puzzle'],


    h_clues = [
      [3],
      [4],
      [2, 2, 2],
      [2, 4, 2],
      [6],
      [3]
    ],
    v_clues = [
      [4],
      [6],
      [2, 2],
      [2, 2],
      [2],
      [2],
      [2],
      [2],
      [],
      [2],
      [2]
    ],
    args = [
      [h_clues, v_clues], 6, 11
    ],

    ans = [
      [0, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 1, 1],
      [1, 1, 0, 0, 1, 1],
      [0, 0, 0, 1, 1, 0],
      [0, 0, 0, 1, 1, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0]
    ],

    t2 = [args, ans, '6 x 11 puzzle'],


    h_clues = [
      [1, 1, 3],
      [3, 2, 1, 3],
      [2, 2],
      [3, 6, 3],
      [3, 8, 2],
      [15],
      [8, 5],
      [15],
      [7, 1, 4, 2],
      [7, 9],
      [6, 4, 2],
      [2, 1, 5, 4],
      [6, 4],
      [2, 6],
      [2, 5],
      [5, 2, 1],
      [6, 1],
      [3, 1],
      [1, 4, 2, 1],
      [2, 2, 2, 2]
    ],
    v_clues = [
      [2, 1, 1],
      [3, 4, 2],
      [4, 4, 2],
      [8, 3],
      [7, 2, 2],
      [7, 5],
      [9, 4],
      [8, 2, 3],
      [7, 1, 1],
      [6, 2],
      [5, 3],
      [3, 6, 3],
      [2, 9, 2],
      [1, 8],
      [1, 6, 1],
      [3, 1, 6],
      [5, 5],
      [1, 3, 8],
      [1, 2, 6, 1],
      [1, 1, 1, 3, 2]
    ],
    args = [
      [h_clues, v_clues], 20, 20
    ],

    ans = [
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1]
    ],


    t3 = [args, ans, '20 x 20 puzzle'],

    tests = [t1, t2, t3];
  return tests;
}

doTests(getPuzzles(), 'Sample tests')
