<script>
  // Список фраз, которые будут печататься
  const messages = [
    "Welcome, traveler! 👋",
    "This place holds many secrets of Chicago’s history...",
    "Can you guess where this photo was taken?"
  ];

  const resultDiv = document.getElementById("result");
  let messageIndex = 0;
  let charIndex = 0;
  let typing = false;

  function typeText() {
    if (typing) return;
    typing = true;
    const text = messages[messageIndex];
    resultDiv.textContent = ""; // очистить перед началом
    charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < text.length) {
        resultDiv.textContent += text.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(interval);
        typing = false;
      }
    }, 40); // скорость печати
  }

  // Переключение на следующий текст по Enter или пробелу
  document.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && !typing) {
      messageIndex++;
      if (messageIndex >= messages.length) {
        messageIndex = 0; // можно зациклить
      }
      typeText();
    }
  });

  // Автоматически запускаем первый текст при загрузке
  window.addEventListener("load", typeText);
</script>
