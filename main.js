function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  key.classList.remove("playing");

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

function removeTranstition(e) {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => key.classList.remove("playing"));
}

function changeText(ff) {
  document.getElementById("headertext").innerHTML = ff;
}

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removeTranstition);
