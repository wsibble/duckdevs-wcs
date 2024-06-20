function getDuck() {
  const duckDiv = document.getElementById('duck');
	const duckAudio = document.getElementById('audioPlayer');
  duckDiv.innerHTML = '🦆';
	duckAudio.play();
}
