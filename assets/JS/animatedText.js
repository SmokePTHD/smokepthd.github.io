document.addEventListener("DOMContentLoaded", () => {
  const texts = ["web dev", "mobile dev", "full-stack dev", "student"];
  typeWriterEffect("animated-text", texts, 100, 1000);
});

function typeWriterEffect(elementId, texts, speed, pause) {
  let i = 0;
  let textIndex = 0;
  const element = document.getElementById(elementId);

  function typeWriter() {
    if (i < texts[textIndex].length) {
      element.innerHTML = `{${texts[textIndex].substring(0, i + 1)}}`;
      i++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        deleteText();
      }, pause);
    }
  }

  function deleteText() {
    if (i >= 0) {
      element.innerHTML = `{${texts[textIndex].substring(0, i)}}`;
      i--;
      setTimeout(deleteText, speed);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}
