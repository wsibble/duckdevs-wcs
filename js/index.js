async function getDuck() {
  const duckDiv = document.getElementById('duck');
  const nameLabel = document.getElementById('name');
  const duckAudio = document.getElementById('audioPlayer');
  const names = await fetchNames();
  const name = getRandomName(names);

  nameLabel.textContent = name;
  duckDiv.innerHTML = `
	🦆
  <button onclick="cookDuck()">Cook Duck</button>`;
  // reset the racing duck after getting cooked
  document.getElementById('racingDuck0').innerHTML = '🦆';

  duckAudio.play();
}

async function fetchNames() {
  const response = await fetch('data/names.json');
  if (!response.ok) {
    throw Error('Error fetching - ' + response.statusText);
  }

  const names = await response.json();
  return names['people'];
}

function getRandomName(names) {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex]['name'];
}

function cookDuck() {
  const duckDiv = document.getElementById('duck');
  duckDiv.innerHTML = '🍗';
  // cook the racing duck as well
  document.getElementById('racingDuck').innerHTML = '🍗';

  // console.log("ran the cookDuck function.");
}

function getDev() {
  const devDiv = document.getElementById('dev');
  devDiv.innerHTML = '🛠️';
}

// Timer
let countdown;

function startTimer() {
  const durationInput = document.getElementById('duration').value;
  let timeRemaining = parseInt(durationInput, 10) * 60;

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    alert('Quack! Enter an integer larger than 0');
    return;
  }

  clearInterval(countdown);
  updateTimerDisplay(timeRemaining);

  countdown = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(countdown);
      alert('Time is up!');
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const timerDisplay = document.getElementById('timer');
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  timerDisplay.textContent = `${zeroFormat(hours)}:${zeroFormat(
    minutes
  )}:${zeroFormat(remainingSeconds)}`;
}

function zeroFormat(number) {
  return number < 10 ? '0' + number : number;
}
//

let duckPositions = [0];
let duckTimeouts = [0];

let ducksMoving = false;

const startRace = function (e) {
  startTimer();
  duckTimeout = setInterval(duckMove, 500);
};

const stopRace = function (e) {
  clearInterval(duckTimeout);
  clearInterval(countdown);

  if (document.getElementById('duckRace').innerHTML !== '' && !ducksMoving) {
    duckTimeout = setInterval(duckMove, 50);
    ducksMoving = true;
  } else if (!ducksMoving) {
    alert('Need at least one duck to start the race');
  } else {
    alert('Race has already started');
  }
};

function duckMove() {
  for (let i = 0; i < duckPositions.length; i++) {
    duckPositions[i] = (duckPositions[i] + Math.random() * 0.5) % 100;
    document.getElementById(
      `racingDuck${i}`
    ).style.marginLeft = `${duckPositions[i]}%`;
  }
}

function addDuckRacer() {
  // create a new duck
  let dRacer = document.createElement('div');
  dRacer.innerHTML = '🦆';
  dRacer.id = `racingDuck${duckPositions.length}`;
  dRacer.className = 'racingDuck';
  // update duckPositions and duckTimeouts
  duckPositions.push(0);
  duckTimeouts.push(undefined);
  document.getElementById('duckRace').appendChild(dRacer);
}

function removeDuckRacer() {
  if (document.getElementById('duckRace') !== '') {
    racingDiv = document.getElementById('duckRace');
    racingDiv.removeChild(racingDiv.lastChild);
    duckPositions.pop();
  } else {
    alert('No more ducks to remove');
  }
}

function resetDucks() {
  for (let i = 0; i < duckPositions.length; i++) {
    duckPositions[i] = 0;
    document.getElementById(`racingDuck${i}`).style.marginLeft = 0;
  }
}

document.getElementById('duckRaceButton').addEventListener('click', startRace);
document
  .getElementById('duckStopRaceButton')
  .addEventListener('click', stopRace);
document
  .getElementById('addDuckButton')
  .addEventListener('click', addDuckRacer);
document
  .getElementById('removeDuckButton')
  .addEventListener('click', removeDuckRacer);
document
  .getElementById('resetDucksButton')
  .addEventListener('click', resetDucks);
