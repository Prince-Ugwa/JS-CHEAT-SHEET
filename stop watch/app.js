const minutesCount = document.querySelector(".minutes");
const secondsCount = document.querySelector(".seconds");
const tensCount = document.querySelector(".tens");
const btnCtrl = document.querySelectorAll(".btn");

let tens = 00;
let minutes = 00;
let seconds = 00;
let interval;

function startCount() {
  tens++;
  if (tens <= 9) {
    tensCount.textContent = "0" + tens;
  }
  if (tens > 9) {
    tensCount.textContent = tens;
  }
  if (tens >= 20) {
    seconds++;
    secondsCount.textContent = "0" + seconds;
    tens = 0;
    secondsCount.textContent = seconds;
  }
  if (seconds > 20) {
    minutes++;
    minutesCount.textContent = "00" + minutes;
    seconds = 0;
    minutesCount.textContent = "0" + minutes;
  }
  if (minutes > 9) {
    minutesCount.textContent = minutes;
  }
}

btnCtrl.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const target = e.currentTarget.classList;
    // console.log(target);
    if (target.contains("start")) {
      clearInterval(interval);
      interval = setInterval(startCount, 10);
    }
    if (target.contains("stop")) {
      clearInterval(interval);
    }
    if (target.contains("reset")) {
      clearInterval(interval);
      tens = "00";
      seconds = "00";
      minutes = "00";
      minutesCount.textContent = minutes;
      secondsCount.textContent = seconds;
    }
  });
});

// function startCount() {
//   seconds++;
//   if (seconds <= 9) {
//     secondsCount.textContent = "0" + seconds;
//   }
//   if (seconds > 9) {
//     secondsCount.textContent = seconds;
//   }
//   if (seconds > 99) {
//     minutes++;
//     minutesCount.textContent = "0" + minutes;
//     seconds = 0;
//     secondsCount.textContent = "0" + seconds;
//   }
//   if (minutes > 9) {
//     minutesCount.textContent = minutes;
//   }
// }
