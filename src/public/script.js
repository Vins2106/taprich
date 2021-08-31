let isFirst = localStorage.getItem("first");
if (!isFirst) {
  document.getElementById("first-play").style.display = "block";
}