const bars = document.querySelector(".nav-btn");
const navClose = document.querySelector(".nav-close");
const sidePanel = document.querySelector(".navbar");

bars.addEventListener("click", () => {
  sidePanel.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  sidePanel.classList.remove("showNav");
});
