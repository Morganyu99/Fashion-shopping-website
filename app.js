document.querySelectorAll(".collapse").forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("expandable");
  });
});
