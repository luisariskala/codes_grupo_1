window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("footer a");

  function addPressEffect(button) {
    if (!button) return;

    button.style.transition = "transform 0.1s ease";

    button.addEventListener("mousedown", () => {
      button.style.transform = "scale(0.93)";
    });
    button.addEventListener("mouseup", () => {
      button.style.transform = "";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });

    button.addEventListener("touchstart", () => {
      button.style.transform = "scale(0.93)";
    });
    button.addEventListener("touchend", () => {
      button.style.transform = "";
    });
  }

  buttons.forEach(addPressEffect);
});
