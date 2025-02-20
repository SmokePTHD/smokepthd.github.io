document.getElementById("burger-menu").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  const body = document.body;
  menu.classList.toggle("active");
  body.classList.toggle("active-menu");
});
