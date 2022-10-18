const menu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".header__nav-list");

menu.addEventListener("click", function () {
  nav.classList.toggle("header__nav-open");
  console.log("yes");
});
