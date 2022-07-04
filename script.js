const showAnswerButton = document.querySelector('[data-js="answerButton"]');
const answerText = document.querySelector('[data-js="answerText"]');

showAnswerButton.addEventListener("click", () => {
  answerText.classList.toggle("hidden");
  if (showAnswerButton.textContent === "Show Answer") {
    showAnswerButton.textContent = "Hide Answer";
  } else {
    showAnswerButton.textContent = "Show Answer";
  }
});

const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');

bookmarkIcon.addEventListener("click", () => {
  if (bookmarkIcon.className === "bookmark--active") {
    bookmarkIcon.classList.remove("bookmark--active");
    bookmarkIcon.classList.add("bookmark--inactive");
  } else {
    bookmarkIcon.classList.remove("bookmark--inactive");
    bookmarkIcon.classList.add("bookmark--active");
  }
});
