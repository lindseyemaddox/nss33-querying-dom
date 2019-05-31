
document.querySelector(".article__header").textContent = "Welcome to the Lindsey blog";

const headerEl = document.querySelectorAll(".article__header");
headerEl[0].classList.add("important");
headerEl[1].classList.add("important");

// for (let i = 0; i < headerEl.length; i++) {
//   if (headerEl)
// }

const dashedEl = document.querySelector(".dashed");
dashedEl.classList.remove("dashed");

const footerEl = document.querySelector(".article__footer");
footerEl.classList.add("goldenrod");