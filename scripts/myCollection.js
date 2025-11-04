// myCollection.js
document.addEventListener("DOMContentLoaded", () => {
  // Create floating button
  const btn = document.createElement("button");
  btn.id = "myCollectionBtn";
  btn.className = "btn btn-warning rounded-pill shadow-lg";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.zIndex = "1000";
  btn.innerHTML = "🧾 My Collection";
  document.body.appendChild(btn);

  // Create collection modal
  const modal = document.createElement("div");
  modal.id = "collectionModal";
  modal.className =
    "position-fixed bottom-0 end-0 bg-dark text-light p-3 rounded-top shadow-lg";
  modal.style.width = "300px";
  modal.style.maxHeight = "60vh";
  modal.style.overflowY = "auto";
  modal.style.display = "none";
  modal.style.zIndex = "1100";
  modal.innerHTML = `
    <h5 class="text-warning">My Collection</h5>
    <ul id="collectionList" class="list-unstyled mb-2"></ul>
    <button id="clearCollection" class="btn btn-sm btn-danger">Clear</button>
  `;
  document.body.appendChild(modal);

  // Toggle modal
  btn.addEventListener("click", () => {
    modal.style.display = modal.style.display === "none" ? "block" : "none";
    renderCollection();
  });

  // Clear button
  document
    .getElementById("clearCollection")
    .addEventListener("click", () => {
      localStorage.removeItem("myCollection");
      renderCollection();
    });

  // Helper to render items
  function renderCollection() {
    const list = document.getElementById("collectionList");
    const collection = JSON.parse(localStorage.getItem("myCollection")) || [];
    list.innerHTML = "";
    if (collection.length === 0) {
      list.innerHTML = "<li class='text-secondary'>No documents yet.</li>";
      return;
    }
    collection.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = "📜 " + item;
      list.appendChild(li);
    });
  }

  // Expose global helper for other pages
  window.addToCollection = function (docTitle) {
    const collection = JSON.parse(localStorage.getItem("myCollection")) || [];
    if (!collection.includes(docTitle)) {
      collection.push(docTitle);
      localStorage.setItem("myCollection", JSON.stringify(collection));
    }
  };
});
