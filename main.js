document.addEventListener("DOMContentLoaded", () => {
  const x = document.querySelector(".x");
  const display = document.querySelector(".display");

  x.addEventListener("click", () => {
    display.innerHTML = "Hello";
  });
});
