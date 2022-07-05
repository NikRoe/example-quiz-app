const showAnswerButton = document.querySelector('[data-js="answerButton"]');
const answerText = document.querySelector('[data-js="answerText"]');

function onAnswerButtonClick() {
  answerText.classList.toggle("hidden");
  if (showAnswerButton.innerText === "Show Answer") {
    showAnswerButton.innerText = "Hide Answer";
  } else {
    showAnswerButton.innerText = "Show Answer";
  }
}

showAnswerButton.addEventListener("click", onAnswerButtonClick);

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
