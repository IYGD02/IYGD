
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Futurista</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="menu-circular">
    <div class="boton-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul class="menu">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Proyectos</a></li>
      <li><a href="#">Sobre nosotros</a></li>
    </ul>
  </div>
  
  <main>
    <section class="hero">
      <h1>bienvenido al futuro</h1>
    </section>
  </main>
  <footer>
    <p>&copy; 2023 Futurista</p>
  </footer>
  <script src="script.js"></script>
</body>
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


body {
  background-color: #000; /* Color negro */
}
body {
  color: #fff; /* Color blanco */
}

h1 {
  opacity: 0; 
  animation: aparece 10s forwards; 
}

@keyframes aparece {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


.menu-circular {
  position: fixed;
  top: 10;
  left: 10;
  background-color: #808080;
  border-radius: 500%;
  padding: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.boton-menu {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.boton-menu span {
  width: 10;
  height: 2;
  background-color: #fff;
  margin: 2 auto;
  border-radius: 10;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
  position: absolute;
  top: 50;
  left: 10;
  background-color: #808080;
  border-radius: 10px;
  padding: 10;
}

.menu li {
  margin-bottom: 10px;
}

.menu a {
  color: #fff;
  text-decoration: none;
}

.menu a:hover {
  color: #ccc;
}

.menu-circular:hover .menu {
  display: block;
}
</style>
</html>

