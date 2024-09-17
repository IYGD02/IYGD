document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.transition = "all 0.3s ease";
      link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseout", () => {
      link.style.transform = "scale(1)";
    });
  });
});
