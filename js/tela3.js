
  document.addEventListener("DOMContentLoaded", function() {
    const botaoAdd = document.querySelector("body > a:last-of-type");
    botaoAdd.style.transition = "transform 0.1s ease";
    botaoAdd.addEventListener("mousedown", () => {
      botaoAdd.style.transform = "scale(0.8)";
    });
    botaoAdd.addEventListener("mouseup", () => {
      botaoAdd.style.transform = "scale(1)";
    });
    botaoAdd.addEventListener("touchstart", () => {
      botaoAdd.style.transform = "scale(0.8)";
    });

    botaoAdd.addEventListener("touchend", () => {
      botaoAdd.style.transform = "scale(1)";
    });
  });
