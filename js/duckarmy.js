function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createDuckArmy() {
  const duckDiv = document.getElementById("duckarmy");
  const armySize = document.getElementById("armysize").value;
  const duckAudio = document.getElementById("audioPlayer");

  document.getElementById("duckarmy").innerHTML = '';

  for (let i = 0; i < armySize; i++) {
    duckDiv.append("🦆");
    await sleep(100);
  }

  duckAudio.play();
  alert('Your duck army is ready!')
}
