let count = 0;

const countValue = document.querySelector(".counter-value");
const buttons = document.querySelectorAll(".btn");
// console.log(buttons);
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const target = e.currentTarget.classList;
    if (target.contains("decrease")) {
      count = count - 1;
    }
    if (target.contains("increase")) {
      count = count + 1;
    }
    if (target.contains("reset")) {
      count = 0;
    }
    if (count > 0) {
      countValue.style.color = "green";
    }
    if (count < 0) {
      countValue.style.color = "crimson";
    }
    if (count === 0) {
      countValue.style.color = "#000";
    }
    countValue.textContent = count;
  });
});
