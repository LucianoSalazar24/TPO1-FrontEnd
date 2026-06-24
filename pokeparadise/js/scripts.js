document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".hamburger");
  const nav    = document.querySelector(".main-nav");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    // Cierra al hacer click en un enlace
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }
});
