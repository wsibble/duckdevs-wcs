async function getDuck() {
  const duckDiv = document.getElementById('duck');
	const nameLabel = document.getElementById('name');
	const names = await fetchNames();
	const name = getRandomName(names);

	
	nameLabel.textContent = name;
  duckDiv.innerHTML = `
	🦆
  <button onclick="cookDuck()">Cook Duck</button>`;
	}

async function fetchNames(){
	const response = await fetch('../data/names.json')
	if (!response.ok){
		throw Error('Error fetching - ' + response.statusText);
	}

	const names = await response.json();
	return names;
}

function getRandomName(names){
	const randomIndex = Math.floor(Math.random() * names.length);
	return names[randomIndex];
}

function cookDuck() {
  const duckDiv = document.getElementById('duck');

  // console.log("ran the cookDuck function.");

  duckDiv.innerHTML = "🍗";
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
