const question = document.querySelectorAll(".question-title");

question.forEach((q, idx) => {
  const answerContainers = document.querySelectorAll(".answer_container");
  const arrowElement = q.lastChild;
  const arrowImg = arrowElement.lastChild;

  q.addEventListener("click", () => {
    q.classList.toggle("question-bolder");
    answerContainers[idx].classList.toggle("show-answer-container");
    arrowImg.classList.toggle("rotate-arrow");
  });
});
