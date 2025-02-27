document.addEventListener("DOMContentLoaded", () => {
  loadHeader(() => {
    initializeBurgerMenu();
  });

  loadFooter();
  loadSidebar();
});

function loadHeader(callback) {
  fetch("/assets/HTML/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => console.error("Error loading header:", error));
}

function initializeBurgerMenu() {
  const burgerMenu = document.getElementById("burger-menu");
  const menu = document.getElementById("menu");
  const body = document.body;

  burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    body.classList.toggle("active-menu");
  });
}

function loadFooter() {
  fetch("/assets/HTML/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
      const year = new Date().getFullYear();
      document.getElementById(
        "copyrigths"
      ).innerHTML = `${year} &copy Gonçalo Sousa`;
    })
    .catch((error) => console.error("Error loading footer:", error));
}

function loadSidebar() {
  const sidebar = document.getElementById("sidebar");
  const numberHeight = 25;
  const pageHeight = document.documentElement.scrollHeight;

  const numberOfLines = pageHeight / numberHeight;

  for (var i = 1; i < numberOfLines; i++) {
    const newSpan = document.createElement("span");
    newSpan.innerHTML = i;

    sidebar.appendChild(newSpan);
  }
}
