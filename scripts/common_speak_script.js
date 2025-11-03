function showDialogue(text) {
  document.getElementById('dialogue-overlay').classList.remove('d-none');
  const box = document.getElementById('result-container');
  const speech = document.getElementById('speech-text');
  speech.textContent = "";// clean before the start

  // printing the message letter by letter
  for (const char of text) {
    speech.textContent += char;
    setTimeout(true, 40); // speed of printing
  }

  box.classList.remove('hidden');
  box.classList.add('visible');
}

function hideDialogue() {
  document.getElementById('dialogue-overlay').classList.add('d-none');
}
