const accordionQestion = document.querySelectorAll(".question");
const questionAns = document.querySelector(".accordion-ans");

accordionQestion.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.parentElement.classList.contains("active")) {
      question.parentElement.classList.toggle("active");
    } else {
      document
        .querySelectorAll(".question")
        .forEach((question) =>
          question.parentElement.classList.remove("active")
        );
      question.parentElement.classList.add("active");
    }
  });
});
