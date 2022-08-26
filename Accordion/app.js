const accordionQuestion = document.querySelectorAll(".question");

accordionQuestion.forEach((question) => {
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
