const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const box = document.getElementById("box");

let nIntervalId;
function startColoring() {
  if (!nIntervalId) {
    nIntervalId = setInterval(changeBgColor, 1000);
  }
}

function changeBgColor() {
  if (box.className === "go") {
    box.className = "stop";
  } else {
    box.className = "go";
  }
}

function stopColoring() {
  clearInterval(nIntervalId);
  nIntervalId = null;
}

startBtn.addEventListener("click", startColoring);
stopBtn.addEventListener("click", stopColoring);