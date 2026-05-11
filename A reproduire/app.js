window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    const target = parseInt(bar.getAttribute("data-width"));
    const count = bar.parentElement.previousElementSibling.querySelector(".count");

    // animation de la barre
    bar.style.width = target + "%";

    // animation du chiffre
    let start = 0;
    let interval = setInterval(() => {
      if (start >= target) {
        clearInterval(interval);
      } else {
        start++;
        count.textContent = start + "%";
      }
    }, 20); // vitesse
  });
});
