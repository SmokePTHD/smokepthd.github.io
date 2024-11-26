document.addEventListener("DOMContentLoaded", () => {
  const counterLinesContainer = document.getElementById("counter-lines");

  function populateLineNumbers() {
    counterLinesContainer.innerHTML = "";

    const lineHeight = 25;
    const pageHeight = document.documentElement.scrollHeight;
    const lineCount = Math.floor(pageHeight / lineHeight);

    for (let i = 1; i <= lineCount; i++) {
      const lineNumber = document.createElement("span");
      lineNumber.textContent = i;
      counterLinesContainer.appendChild(lineNumber);
    }
  }

  populateLineNumbers();

  window.addEventListener("resize", populateLineNumbers);
});
