function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createDuckArmy() {
  const duckDiv = document.getElementById("duckarmy");
  const armySize = 1000;

  for (let i = 0; i < armySize; i++) {
    duckDiv.append("🦆");
    await sleep(100);
  }
}
