<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Futurista</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Sobre mí</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="hero">
      <h1>Bienvenido al futuro</h1>
      <p>Explora mi universo de innovación y tecnología</p>
      <button>Descubre más</button>
    </section>
    <section class="proyectos">
      <h2>Proyectos recientes</h2>
      <ul>
        <li>
          <img src="img/proyecto1.jpg" alt="Proyecto 1">
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1</p>
        </li>
        <li>
          <img src="img/proyecto2.jpg" alt="Proyecto 2">
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2</p>
        </li>
      </ul>
    </section>
  </main>
  <footer>
    <p>&copy; 2023 Futurista</p>
  </footer>
  <script src="script.js"></script>
<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 1em;
  text-align: center;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

nav li {
  margin-right: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
}

.hero {
  background-image: linear-gradient(to bottom, #333, #555);
  background-size: 100% 300px;
  background-position: 0% 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.hero h1 {
  font-size: 48px;
}

.proyectos {
  padding: 2em;
}

.proyectos ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.proyectos li {
  margin-bottom: 20px;
}

.proyectos img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 1em;
  text-align: center;
}
</style>
<script>
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
</script>
</body>
</html>