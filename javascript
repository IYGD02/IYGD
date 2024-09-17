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
const button = document.querySelector('.hero button');

button.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - 50);
  const y = Math.random() * (window.innerHeight - 50);
  
  button.style.top = `${y}px`;
  button.style.left = `${x}px`;
  
  // Añade un poco de aleatoriedad a la velocidad y dirección del movimiento
  button.style.transitionDuration = `${Math.random() * 2}s`;
  button.style.transform = `rotate(${Math.random() * 360}deg)`;
});
// JavaScript
const titulo = document.querySelector('h1');

const botonMenu = document.querySelector('.boton-menu');
const menu = document.querySelector('.menu');

botonMenu.addEventListener('click', () => {
  menu.classList.toggle('mostrar');
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('boton-menu') && !e.target.classList.contains('menu')) {
    menu.classList.remove('mostrar');
  }
});