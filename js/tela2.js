
window.addEventListener("DOMContentLoaded", () => {
  const pressables = document.querySelectorAll("body > ul li a, footer a");

  function addPressEffect(el) {
    if (!el) return;

    el.style.transition = "transform 0.1s ease";

    el.addEventListener("mousedown", () => (el.style.transform = "scale(0.93)"));
    el.addEventListener("mouseup",   () => (el.style.transform = ""));
    el.addEventListener("mouseleave",() => (el.style.transform = ""));

    el.addEventListener("touchstart", () => (el.style.transform = "scale(0.93)"), {passive: true});
    el.addEventListener("touchend",   () => (el.style.transform = ""));
    el.addEventListener("touchcancel",() => (el.style.transform = ""));

    el.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") el.style.transform = "scale(0.93)";
    });
    el.addEventListener("keyup", () => (el.style.transform = ""));
    el.addEventListener("blur", () => (el.style.transform = ""));
  }

  pressables.forEach(addPressEffect);
});
