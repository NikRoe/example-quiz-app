export default function bookmark() {
  const styledBookmarkIconList = document.querySelectorAll(
    '[data-js="styledBookmarkIcon"]'
  );

  styledBookmarkIconList.forEach((bookmarkIcon) => {
    function onStyledBookmarkIconClick() {
      bookmarkIcon.classList.toggle("card__bookmark--active");
    }

    bookmarkIcon.addEventListener("click", onStyledBookmarkIconClick);
  });
}
