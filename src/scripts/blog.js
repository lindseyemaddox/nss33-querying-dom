
document.querySelector(".article__header").textContent = "Welcome to the Lindsey blog";

const headerEl = document.querySelector(".article__header");
headerEl.classList.add("important")

const dashedEl = document.querySelector(".dashed");
dashedEl.classList.remove("dashed")

const footerEl = document.querySelector(".article__footer");
footerEl.classList.add("goldenrod")

// /*
//     Get reference to the section with the class of `smallText`
//     and remove that class. Then add a new class of `largeText`
// */
// const smallTextEl = document.querySelector(".smallText")
// smallTextEl.classList.remove("smallText")
// smallTextEl.classList.add("largeText")