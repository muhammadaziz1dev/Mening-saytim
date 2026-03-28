const menu = document.getElementById("menu");
const navList = document.getElementById("navList");

menu.addEventListener("click", () => {
  menu.classList.toggle("aktiv");
  navList.classList.toggle("aktiv");
});

  const container = document.querySelector(".carusel-container");
  container.innerHTML += container.innerHTML;

  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });