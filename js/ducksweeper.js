// find all the ducks by removing ALL surrounding grass! be careful not to click on any before finding them all, or else they will fly away!
const board = [[]];
const visited = [[]];
const gameTable = document.getElementById("ducksweeperGameBoard");
const gameInfo = document.getElementById("gameInfo");

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
function numberDFS(x, y) {
  let localVisited = [[]];
  fillEmptyMap(localVisited, 10, 10);
  //   const stat
  const stack = [[x, y]];

  while (stack.length) {
    const vertex = 
  }
}
function clickHandler(event) {
  let arr = event.target.id.split(",").map(Number);
  let x = arr[0];
  let y = arr[1];

  console.log(arr, board[x][y]);
  if (visited[x][y] == 1) return;
  else visited[x][y] = 1;

  if (board[x][y] === -1) {
    // game over
    gameInfo.innerText = "Oh no! You scared away the ducks :(";
    // display entire board
    // change new game to play again
  } else if (board[x][y] === 0) {
    // clear all 0 and adjacent numbers to 0
  } else {
    let cell = document.getElementById(event.target.id);
    cell.innerHTML = board[x][y];
    console.log("yuh");
  }
}

fillEmptyMap(board, 10, 10);
fillEmptyMap(visited, 10, 10);
populateBoard(10);

for (let i = 0; i < 10; i++) {
  let row = gameTable.insertRow(i);
  for (let j = 0; j < 10; j++) {
    let cell = row.insertCell(j);
    // cell.innerHTML = board[i][j]; // debug only
    cell.innerHTML = "[]";
    cell.id = `${i},${j}`;
    cell.addEventListener("click", (e) => clickHandler(e));
  }
}
