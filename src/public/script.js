let isFirst = localStorage.getItem("first");
let fPlay = document.getElementById("first-play")
let sBtn = document.getElementById("start-btn")
let Nav = document.getElementById("navbar")
let navToggle = document.getElementById("nav-toggle")
let isNav = false;

if (isFirst) {
  fPlay.style.display = "none";
}

// btn click
sBtn.onclick = function() {
  fPlay.classList.add("no-display")
  localStorage.setItem("first", "true")
}

function openNav() {
  if (isNav) {
    Nav.classList.remove("navbar-on")
    isNav = false;
    navToggle.src = 'https://raw.githubusercontent.com/Vins2106/assets/main/chevron-up%20(1).svg'
  } else {
    Nav.classList.add("navbar-on")
    isNav = true;
    navToggle.src = 'https://raw.githubusercontent.com/Vins2106/assets/main/chevron-down.svg';
  }
}