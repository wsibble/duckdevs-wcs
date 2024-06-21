// find all the ducks by removing ALL surrounding grass! be careful not to click on any before finding them all, or else they will fly away!
let board = [[]];
let visited = [[]];

function fillEmptyMap(array, width, height) {
  for (var x = 0; x < width; x++) {
    array[x] = [];
    for (var y = 0; y < height; y++) {
      array[x][y] = 0;
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// console.log(board);

function populateBoard(numDucks) {
  for (let i = 0; i < numDucks; i++) {
    let x = 0;
    let y = 0;
    do {
      x = getRandomInt(10);
      y = getRandomInt(10);
    } while (board[x][y] === -1);

    board[x][y] = -1;
    // update duck position info
    for (let r = x - 1; r < x + 2; r++) {
      for (let c = y - 1; c < y + 2; c++) {
        if (r == x && c == y) continue;
        if (r < 0 || r > 9 || c < 0 || c > 9) continue;
        if (board[r][c] === -1) continue;
        board[r][c]++;
      }
    }
  }
}
// function prettyPrint(b) {}
fillEmptyMap(board, 10, 10);
fillEmptyMap(visited, 10, 10);

populateBoard(10);
console.log(board);
