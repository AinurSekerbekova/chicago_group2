var resultDiv = document.getElementById("result-container");
resultDiv.addEventListener("touchstart",  function () {
  goToNext();
});
resultDiv.addEventListener("click",  function () {
  goToNext();
});
document.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ")) {
        goToNext();
    }
});
let messageIndex = 0;

function listen_to_keys( messages, dim_lights){
    console.log(messageIndex)
    console.log(messages[messageIndex])
    if (messageIndex <= messages.length-1) {
        showDialogue(messages[messageIndex].text,dim_lights,messages[messageIndex].img);
    }
    if (messageIndex == messages.length-1 && dim_lights){
        hideDialogue();
    }
    messageIndex++;
}
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

}

function hideDialogue() {
  document.getElementById('dialogue-overlay').classList.add('d-none');
}
