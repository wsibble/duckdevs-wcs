function getDuck() {
  const duckDiv = document.getElementById('duck');
  duckDiv.innerHTML = '🦆';
}

let duckPosition = 0;
let duckTimeout;

const startRace = function (e) {
  duckTimeout = setInterval(duckMove, 500);
};

const stopRace = function (e) {
  clearInterval(duckTimeout);
};

function duckMove() {
  duckPosition = (duckPosition + Math.floor(Math.random() * 5)) % 100;
  document.getElementById("racingDuck").style.marginLeft = `${duckPosition}%`;
}

document.getElementById("duckRaceButton").addEventListener("click", startRace);
document
  .getElementById("duckStopRaceButton")
  .addEventListener("click", stopRace);