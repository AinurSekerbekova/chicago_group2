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
  modal.style.width = "320px";
  modal.style.maxHeight = "60vh";
  modal.style.overflowY = "auto";
  modal.style.display = "none";
  modal.style.zIndex = "1100";
  modal.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h5 class="text-warning m-0">My Collection</h5>
      <button id="closeCollection" class="btn btn-sm btn-outline-light">✖</button>
    </div>
    <div id="collectionGrid" class="d-flex flex-wrap gap-2 justify-content-start"></div>
    <button id="clearCollection" class="btn btn-sm btn-danger w-100 mt-3">Clear All</button>
  `;
  document.body.appendChild(modal);

  // Toggle open/close
  btn.addEventListener("click", () => {
    modal.style.display = modal.style.display === "none" ? "block" : "none";
    renderCollection();
  });

  document.getElementById("closeCollection").addEventListener("click", () => {
    modal.style.display = "none";
  });

  document.getElementById("clearCollection").addEventListener("click", () => {
    localStorage.removeItem("myCollection");
    renderCollection();
  });

  function renderCollection() {
    const grid = document.getElementById("collectionGrid");
    const collection = JSON.parse(localStorage.getItem("myCollection")) || [];
    grid.innerHTML = "";
    if (collection.length === 0) {
      grid.innerHTML = "<p class='text-secondary'>No discoveries yet.</p>";
      return;
    }

    collection.forEach(item => {
      const card = document.createElement("div");
      card.className = "bg-secondary bg-opacity-25 p-2 rounded text-center";
      card.style.width = "130px";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="img-fluid rounded mb-2" style="height:80px; object-fit:cover;">
        <p class="small m-0">${item.name}</p>
      `;
      grid.appendChild(card);
    });
  }

  // Add item to collection (stores both name and image)
  window.addToCollection = function (item) {
    const collection = JSON.parse(localStorage.getItem("myCollection")) || [];
    const exists = collection.some(c => c.name === item.name);
    if (!exists) {
      collection.push(item);
      localStorage.setItem("myCollection", JSON.stringify(collection));
    }
  };
});
