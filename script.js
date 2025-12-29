const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const space = document.getElementById("space");
const countdown = document.getElementById("countdown");
const rocket = document.getElementById("rocket");
const message = document.getElementById("message");

let count = 3;

startBtn.onclick = () => {
  startScreen.style.display = "none";
  space.style.display = "block";
  startCountdown();
};

function startCountdown() {
  countdown.style.opacity = 1;
  countdown.innerText = count;

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countdown.innerText = count;
    } else {
      clearInterval(interval);
      countdown.style.opacity = 0;
      launchRocket();
    }
  }, 1000);
}

function launchRocket() {
  rocket.style.opacity = 1;
  rocket.style.transition = "transform 3s linear";
  rocket.style.transform = "translate(-50%, -120vh)";

  setTimeout(showMessage, 3000);
}

function showMessage() {
  message.style.opacity = 1;
  message.style.transition = "opacity 2s";
}
