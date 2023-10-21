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
    if (currentScroll <= scrollY) {
      currentScroll = scrollY;
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
});
