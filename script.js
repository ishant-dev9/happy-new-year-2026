const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const space = document.getElementById("space");
const countdown = document.getElementById("countdown");
const rocket = document.getElementById("rocket");
const message = document.getElementById("message");

const countSound = document.getElementById("countSound");
const launchSound = document.getElementById("launchSound");
const celebrateSound = document.getElementById("celebrateSound");

let count = 3;

// USER INTERACTION STARTS SOUND SYSTEM
startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  space.style.display = "block";
  startCountdown();
});

function startCountdown() {
  countdown.style.opacity = 1;
  countdown.innerText = count;

  // play first beep
  countSound.currentTime = 0;
  countSound.play();

  const interval = setInterval(() => {
    count--;

    if (count > 0) {
      countdown.innerText = count;
      countSound.currentTime = 0;
      countSound.play();
    } else {
      clearInterval(interval);
      countdown.style.opacity = 0;
      launchRocket();
    }
  }, 1000);
}

function launchRocket() {
  rocket.style.opacity = 1;

  // ROCKET SOUND
  launchSound.currentTime = 0;
  launchSound.play();

  rocket.style.transition = "transform 3s linear";
  rocket.style.transform = "translate(-50%, -120vh)";

  setTimeout(showMessage, 3000);
}

function showMessage() {
  launchSound.pause();
  celebrateSound.currentTime = 0;
  celebrateSound.play();

  message.style.opacity = 1;
  message.style.transition = "opacity 2s";
}
