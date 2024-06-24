const board = [[]];
const visited = [[]];
const duckPositions = [];
const gameTable = document.getElementById("ducksweeperGameBoard");
const gameInfo = document.getElementById("gameInfo");
const startButton = document.getElementById("newGameButton");
startButton.addEventListener("click", startGame);
const markDecoyButton = document.getElementById("markDuckButton");

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

// https://stackoverflow.com/questions/3944122/detect-left-mouse-button-press
function detectLeftButton(event) {
  if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
    return false;
  } else if ("buttons" in event) {
    return event.buttons === 1;
  } else if ("which" in event) {
    return event.which === 1;
  } else {
    return event.button == 1 || event.type == "click";
  }
}

function displayBoard() {
  for (let i = 0; i < 10; i++) {
    // let row = gameTable.insertRow(i);
    for (let j = 0; j < 10; j++) {
      // visited[i][j];
      let tempCell = document.getElementById(`${i},${j}`);
      if (board[i][j] === -1) {
        tempCell.innerHTML = "🦆";
      } else {
        tempCell.innerHTML = board[i][j];
        if (visited[i][j] === 0) {
          tempCell.style.backgroundColor = "lightorange";
        }
      }

      //if not visited background orange
      // if wrong duck display red
    }
  }
}

function populateBoard(numDucks) {
  for (let i = 0; i < numDucks; i++) {
    let x = 0;
    let y = 0;
    do {
      x = getRandomInt(10);
      y = getRandomInt(10);
    } while (board[x][y] === -1);

    board[x][y] = -1;
    duckPositions.push([x, y]);
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
  const stack = [[x, y]];

  while (stack.length) {
    const current = stack.pop();
    x = current[0];
    y = current[1];

    if (localVisited[x][y] == 0) {
      localVisited[x][y] = 1;
      let tempId = `${x},${y}`;
      document.getElementById(tempId).innerHTML =
        board[x][y] != 0 ? board[x][y] : " ";

      if (board[x][y] != 0) continue;
      for (let r = x - 1; r < x + 2; r++) {
        for (let c = y - 1; c < y + 2; c++) {
          if (r == x && c == y) continue;
          if (r < 0 || r > 9 || c < 0 || c > 9) continue;
          if (board[r][c] === -1) continue;
          stack.push([r, c]);
        }
      }
    }
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
    displayBoard();
    // game over
    gameInfo.innerText = "Oh no! You scared away the ducks :(";
    // display entire board
    // change new game to play again
  } else if (board[x][y] === 0) {
    // clear all 0 and adjacent numbers to 0
    numberDFS(x, y);
  } else {
    let cell = document.getElementById(event.target.id);
    cell.innerHTML = board[x][y];
  }
}

function startGame() {
  // gameTable.style.visibility = "visible";
  // gameTable.style.hidden = "false";
  gameTable.removeAttribute("hidden");
  gameTable.innerHTML = "";

  gameInfo.innerHTML = "";
  fillEmptyMap(board, 10, 10);
  fillEmptyMap(visited, 10, 10);
  populateBoard(10);

  for (let i = 0; i < 10; i++) {
    let row = gameTable.insertRow(i);
    for (let j = 0; j < 10; j++) {
      let cell = row.insertCell(j);
      // cell.innerHTML = board[i][j]; // debug only
      cell.innerHTML = "🌱";
      cell.id = `${i},${j}`;
      cell.addEventListener("click", (e) => clickHandler(e));
    }
  }
}
