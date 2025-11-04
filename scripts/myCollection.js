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

  // Create collection modal/panel
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
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h5 class="text-warning m-0">My Collection</h5>
      <button id="closeCollection" class="btn btn-sm btn-outline-light">✖</button>
    </div>
    <ul id="collectionList" class="list-unstyled mb-2"></ul>
    <button id="clearCollection" class="btn btn-sm btn-danger w-100 mt-2">Clear All</button>
  `;
  document.body.appendChild(modal);

  // Toggle modal (open/close)
  btn.addEventListener("click", () => {
    modal.style.display = modal.style.display === "none" ? "block" : "none";
    renderCollection();
  });

  // Close button inside panel
  document.getElementById("closeCollection").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Clear collection
  document.getElementById("clearCollection").addEventListener("click", () => {
    localStorage.removeItem("myCollection");
    renderCollection();
  });

  // Render function
  function renderCollection() {
    const list = document.getElementById("collectionList");
    const collection = JSON.parse(localStorage.getItem("myCollection")) || [];
    list.innerHTML = "";
    if (collection.length === 0) {
      list.innerHTML = "<li class='text-secondary'>No items yet.</li>";
      return;
    }
    collection.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = "📜 " + item;
      list.appendChild(li);
    });
  }

  // Global helper to add new items
  window.addToCollection = function (itemTitle) {
    const collection = JSON.parse(localStorage.getItem("myCollection")) || [];
    if (!collection.includes(itemTitle)) {
      collection.push(itemTitle);
      localStorage.setItem("myCollection", JSON.stringify(collection));
    }
  };
});
