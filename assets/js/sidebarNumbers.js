document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const numberHeight = 25;
  const pageHeight = document.documentElement.scrollHeight;

  const numberOfLines = pageHeight / numberHeight;

  for (var i = 1; i < numberOfLines; i++) {
    const newSpan = document.createElement("span");
    newSpan.innerHTML = i;

    sidebar.appendChild(newSpan);
  }
});
