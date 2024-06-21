// menu mobile for ALL pages
const menu = document.querySelector(".menu"),
openMenu = document.querySelector(".bi-list"),
closeMenu = document.querySelector(".bi-x");

openMenu.addEventListener("click", () => {
  menu.classList.add("closeMenu");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("closeMenu");
})