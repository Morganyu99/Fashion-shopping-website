// Expand-Collapse Animation
document.querySelectorAll(".collapse").forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("expandable");
  });
});

// NavBar
const nav = document.querySelectorAll(".nav__container")[0];
const nav_bar = document.querySelectorAll(".collapse")[0];

//Hero;
const highlight = document.querySelectorAll(".highlight");
const fadeUp = document.querySelectorAll(".fade-up");
highlight[0].classList.add("highlight--aftanimate");
highlight[1].classList.add("highlight--aftanimate");
fadeUp[0].classList.add("fade-up--after");
//Scroll Dependent
window.addEventListener("scroll", () => {
  let currentScroll = nav.offsetHeight;
  const windowHeight = window.innerHeight;
  // NavBar
  if (window.scrollY > nav.offsetHeight) {
    if (currentScroll < window.scrollY) {
      currentScroll = window.scrollY;
      nav.classList.remove("sticky");
      nav_bar.classList.remove("expandable");
    } else if (window.scrollY == nav.offsetHeight) {
      currentScroll = window.scrollY;
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

  for (let i = 2; i < highlight.length; i++) {
    if (
      windowHeight - highlight[i].getBoundingClientRect().y >
      0.25 * windowHeight
    ) {
      highlight[i].classList.add("highlight--aftanimate");
    } else {
      highlight[i].classList.remove("highlight--aftanimate");
    }
  }

  //fade-up

  for (let i = 1; i < fadeUp.length; i++) {
    if (window.innerWidth <= 1700 && innerHeight<1600) {
      if (
        fadeUp[i].getBoundingClientRect().y - windowHeight   <
        0.10 * windowHeight
      ) {
        fadeUp[i].classList.add("fade-up--after");
      } else {
        fadeUp[i].classList.remove("fade-up--after");
      }
    } else {
      if (
        fadeUp[i].getBoundingClientRect().y - windowHeight   <
        0.9 * windowHeight
      ) {
        fadeUp[i].classList.add("fade-up--after");
      } else {
        fadeUp[i].classList.remove("fade-up--after");
      }
    }
  }
  //fade-right
  const fadeRight = document.querySelectorAll(".fade-right");
  for (let i = 0; i < fadeRight.length; i++) {
    if (
      windowHeight - fadeRight[i].getBoundingClientRect().y >
      0.15 * windowHeight
    ) {
      fadeRight[i].classList.add("fade-right--after");
    } else {
      fadeRight[i].classList.remove("fade-right--after");
    }
  }
  //fade-left
  const fadeLeft = document.querySelectorAll(".fade-left");
  for (let i = 0; i < fadeLeft.length; i++) {
    if (
      windowHeight - fadeLeft[i].getBoundingClientRect().y >
      0.15 * windowHeight
    ) {
      fadeLeft[i].classList.add("fade-left--after");
    } else {
      fadeLeft[i].classList.remove("fade-left--after");
    }
  }
});
