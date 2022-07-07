export default function navbar() {
  const indexPage = document.querySelector('[data-js="index-page"]');
  const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
  const createPage = document.querySelector('[data-js="create-page"]');
  const profilePage = document.querySelector('[data-js="profile-page"]');

  const pages = [indexPage, bookmarkPage, createPage, profilePage];

  const indexNavbar = document.querySelector('[data-js="index-navbar"]');
  const bookmarkNavbar = document.querySelector('[data-js="bookmark-navbar"]');
  const createNavbar = document.querySelector('[data-js="create-navbar"]');
  const profileNavbar = document.querySelector('[data-js="profile-navbar"]');

  const navbarItems = [
    indexNavbar,
    bookmarkNavbar,
    createNavbar,
    profileNavbar,
  ];

  function hideContent() {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    navbarItems.forEach((item) => {
      item.classList.remove("navbar--wrapper-active");
    });
  }

  indexNavbar.addEventListener("click", () => {
    hideContent();
    indexNavbar.classList.add("navbar--wrapper-active");
    indexPage.classList.remove("hidden");
  });

  bookmarkNavbar.addEventListener("click", () => {
    hideContent();
    bookmarkNavbar.classList.add("navbar--wrapper-active");
    bookmarkPage.classList.remove("hidden");
  });

  createNavbar.addEventListener("click", () => {
    hideContent();
    createNavbar.classList.add("navbar--wrapper-active");
    createPage.classList.remove("hidden");
  });

  profileNavbar.addEventListener("click", () => {
    hideContent();
    profileNavbar.classList.add("navbar--wrapper-active");
    profilePage.classList.remove("hidden");
  });
}
