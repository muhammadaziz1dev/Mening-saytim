const menu = document.getElementById("menu");
const navList = document.getElementById("navList");

menu.addEventListener("click", () => {
  menu.classList.toggle("aktiv");
  navList.classList.toggle("aktiv");
});