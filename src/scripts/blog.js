
document.querySelector(".article__header").textContent = "Welcome to the Lindsey blog";

const headerEl = document.querySelectorAll(".article__header");
headerEl[0].classList.add("important");
headerEl[1].classList.add("important");

const dashedEl = document.querySelector(".dashed");
dashedEl.classList.remove("dashed");

const footerEl = document.querySelector(".article__footer");
footerEl.classList.add("goldenrod");