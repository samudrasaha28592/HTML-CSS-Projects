const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
  const percent = circle.getAttribute("data-percent");
  const progress = circle.querySelector(".progress");

  const offset = 314 - (314 * percent) / 100;

  setTimeout(() => {
    progress.style.strokeDashoffset = offset;
  }, 300);
});