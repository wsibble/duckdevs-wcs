function getDuck() {
  const duckDiv = document.getElementById('duck');
  duckDiv.innerHTML = `🦆
  <button onclick="cookDuck()">Cook Duck</button>`;
}

function cookDuck() {
  const duckDiv = document.getElementById('duck');

  // console.log("ran the cookDuck function.");

  duckDiv.innerHTML = "🍗";
}
