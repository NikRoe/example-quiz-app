export default function card() {
  const cardList = document.querySelectorAll('[data-js="questionCard"]');

  cardList.forEach((card) => {
    console.log(card.querySelector('[data-js="answerButton"]'));

    const showAnswerButton = card.querySelector('[data-js="answerButton"]');
    const answerText = card.querySelector('[data-js="answerText"]');

    let isShown = false;

    function onAnswerButtonClick() {
      answerText.classList.toggle("hidden");
      isShown = !isShown;

      showAnswerButton.innerText = isShown ? "Hide Answer" : "Show Answer";
    }

    showAnswerButton.addEventListener("click", onAnswerButtonClick);
  });
}
