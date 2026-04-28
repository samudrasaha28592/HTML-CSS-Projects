window.onload = () => {
  let fills = document.querySelectorAll(".fill");

  fills.forEach(bar => {
    let width = bar.style.width || getComputedStyle(bar).width;
    bar.style.width = "0%";

    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
};