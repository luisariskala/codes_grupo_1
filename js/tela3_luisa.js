
window.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(
    ".botoes-inferiores a, .botao-som"
  );

  function addPressEffect(elemento) {
    if (!elemento) return;

    elemento.style.transition = "transform 0.1s ease";

    elemento.addEventListener("mousedown", () => {
      elemento.style.transform = "scale(0.9)";
    });

    elemento.addEventListener("mouseup", () => {
      elemento.style.transform = "";
    });

    elemento.addEventListener("mouseleave", () => {
      elemento.style.transform = "";
    });

    elemento.addEventListener(
      "touchstart",
      () => {
        elemento.style.transform = "scale(0.9)";
      },
      { passive: true }
    );

    elemento.addEventListener("touchend", () => {
      elemento.style.transform = "";
    });

    elemento.addEventListener("touchcancel", () => {
      elemento.style.transform = "";
    });
  }

  botoes.forEach(addPressEffect);
});
