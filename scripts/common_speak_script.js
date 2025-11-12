let currentDialogueId = 0;

async function showDialogue(text, dim_lights,imgSrc) {
  const box = document.getElementById('result-container');
  const speech = document.getElementById('speech-text');
  const character_img = document.getElementById('character-img');

  if (dim_lights){
    document.getElementById('dialogue-overlay').classList.remove('d-none');
  }
  if (imgSrc) {
    character_img.src = imgSrc;
  }

  const thisDialogueId = ++currentDialogueId; // uniq ID for every call
  speech.textContent = "";// clean before the start

  // now we are printing the message letter by letter
  for (const char of text) {
    if (thisDialogueId !== currentDialogueId) return;
    speech.textContent += char;
    await new Promise(resolve => setTimeout(resolve, 40)); // milliseconds between every letter (less-> faster printing)
  }

  box.classList.remove('hidden');
  box.classList.add('visible');
}

function hideDialogue() {
  document.getElementById('dialogue-overlay').classList.add('d-none');
}
