let isFirst = localStorage.getItem("first");
let fPlay = document.getElementById("first-play")
let sBtn = document.getElementById("start-btn")
if (!isFirst) {
  fPlay.style.display = "block";
}

// btn click
sBtn.onclick = function() {
  fPlay.classList.add("no-display")
}
