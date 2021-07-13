const hamBurger = document.querySelector(".ham");
const navLinks = document.querySelector(".nav-links");

hamBurger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
