const burger = document.querySelector(".hamburger");

burger.addEventListener("click", function () {
  burger.classList.toggle("change");
});

document.body.addEventListener("click", function (event) {
  if (!event.target.matches(".hamburger, .bar, .list li")) {
    if (burger.classList.contains("change")) {
      burger.classList.remove("change");
    }
  }
});