document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.createElement("button");
  backBtn.id = "goBackBtn";
  backBtn.className = "btn btn-secondary rounded-pill shadow-lg";
  backBtn.style.position = "fixed";
  backBtn.style.bottom = "20px";
  backBtn.style.left = "20px";
  backBtn.style.zIndex = "1000";
  backBtn.innerHTML = "⬅️ Go Back";

  backBtn.addEventListener("click", () => history.back());

  document.body.appendChild(backBtn);
});
