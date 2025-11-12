// homeButton.js
document.addEventListener("DOMContentLoaded", () => {
  // Create floating button
  const homeBtn = document.createElement("button");
  homeBtn.id = "homeBtn";
  homeBtn.className = "btn btn-outline-light bg-dark rounded-circle shadow-lg";
  homeBtn.style.position = "fixed";
  homeBtn.style.bottom = "90px"; // a bit above My Collection button
  homeBtn.style.right = "20px";
  homeBtn.style.zIndex = "1000";
  homeBtn.style.width = "50px";
  homeBtn.style.height = "50px";
  homeBtn.title = "Go to Home Page";

  // Add icon (Bootstrap House icon)
  homeBtn.innerHTML = "🏠";

  // Add to page
  document.body.appendChild(homeBtn);

  // Redirect to home when clicked
  homeBtn.addEventListener("click", () => {
    window.location.href = "index.html"; // ← your home/start page
  });
});
