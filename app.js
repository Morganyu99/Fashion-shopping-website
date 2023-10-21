// Expand-Collapse Animation
document.querySelectorAll(".collapse").forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("expandable");
  });
});

// NavBar
const nav = document.querySelectorAll(".nav__container")[0];
const nav_bar = document.querySelectorAll(".collapse")[0];
let currentScroll = nav.offsetHeight;

//Scroll Dependent
window.addEventListener("scroll", () => {
  // NavBar
  if (window.scrollY > nav.offsetHeight) {
    if (currentScroll <= window.scrollY) {
      currentScroll = window.scrollY;
      nav.classList.remove("sticky");
      nav_bar.classList.remove("expandable");
    } else {
      nav.classList.add("sticky");
      currentScroll = window.scrollY;
      nav_bar.classList.remove("expandable");
    }
  } else {
    nav.classList.remove("sticky");
    nav_bar.classList.remove("expandable");
  }

  //Highlight
  const windowHeight = window.innerHeight;
  const highlight = document.querySelectorAll(".highlight");
  for (let i = 0; i < highlight.length; i++) {
    if (
      windowHeight - highlight[i].getBoundingClientRect().y >
      0.5 * windowHeight
    ) {
      highlight[i].classList.add("highlight--aftanimate");
    } else {
      highlight[i].classList.remove("highlight--aftanimate");
    }
  }
});
