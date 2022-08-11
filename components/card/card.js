import { questionCards } from "../../db.js";

export default function card() {
  const contentWrapper = document.querySelector("#contentWrapper");

  questionCards.forEach((card) => {
    const question = card.questionText;
    const answer = card.answerText;
    const tagList = card.tags;

    const cardContainer = document.createElement("article");
    cardContainer.classList.add("questioncard");
    cardContainer.setAttribute("data-js", "questionCard");
    contentWrapper.append(cardContainer);

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = "Question:";
    cardContainer.append(cardTitle);

    const bookmarkButton = document.createElement("button");
    bookmarkButton.classList.add("card__bookmark");
    bookmarkButton.setAttribute("data-js", "styledBookmarkIcon");
    cardContainer.append(bookmarkButton);

    const questionText = document.createElement("p");
    questionText.textContent = question;
    cardContainer.append(questionText);

    const answerButton = document.createElement("button");
    answerButton.classList.add("button--card");
    answerButton.setAttribute("data-js", "answerButton");
    answerButton.textContent = "Show Answer";
    cardContainer.append(answerButton);

    const answerText = document.createElement("p");
    answerText.textContent = answer;
    answerText.classList.add("hidden");
    answerText.setAttribute("data-js", "answerText");

    cardContainer.append(answerText);

    const tagWrapper = document.createElement("ul");
    tagWrapper.classList.add("tag--wrapper");
    cardContainer.append(tagWrapper);

    tagList.forEach((tag) => {
      const tagItem = document.createElement("li");
      tagItem.classList.add("tag");
      tagItem.textContent = tag;
      tagWrapper.append(tagItem);
    });
  });
  const cardList = document.querySelectorAll('[data-js="questionCard"]');

  cardList.forEach((card) => {
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
