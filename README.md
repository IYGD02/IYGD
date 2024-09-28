
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SUCIOS</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#hombres">Hombres</a></li>
                <li><a href="#mujeres">Mujeres</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
      
<section class="portada">

      <h1> SUC.I.OS </h1>    
 </section> 
    <main>
    <div class="contenedor">
  <div class="rectangulo">
    <img src="https://images.app.goo.gl/nak2E9m4x6FRqvyRA" alt="Imagen 1">
  </div>
  <div class="rectangulo">
    <img src="https://images.app.goo.gl/BkyLnQxeFxyA1EtCA.jpg" alt="Imagen 2">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 3">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 4">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 5">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 6">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 7">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 8">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 9">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 10">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 11">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 12">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 13">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 14">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 15">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 16">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 17">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 18">
  </div>
  <div class="rectangulo">
    <img src="imagen3.jpg" alt="Imagen 19">
  </div>
  <div class="rectangulo">
    <img src="imagen20.jpg" alt="Imagen 20">
  </div>
</div> 
    </main>
    <footer>
        <p>&copy;   copyright</p>
    </footer>
    <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Partículas</title>
	<style>
		/* Estilos para el cuerpo de la página */
		body {
			margin: 0;
			padding: 0;
			background-color: #000;
		}
		
		/* Estilos para las partículas */
		.particle {
			position: fixed;
			width: 2px;
			height: 2px;
			background-color: #fff;
			border-radius: 50%;
			animation: move 10s infinite linear;
			z-index: -1;
		}
		
		@keyframes move {
			0% {
				transform: translate(0, 0);
			}
			100% {
				transform: translate(calc(100vw + 100%), calc(100vh + 100%));
			}
		}
	</style>
</head>
<body>
	
	<!-- Generamos las partículas con JavaScript -->
	<script>
		for (let i = 0; i < 100; i++) {
			const particle = document.createElement('div');
			particle.classList.add('particle');
			particle.style.top = `${Math.random() * 100}%`;
			particle.style.left = `${Math.random() * 100}%`;
			particle.style.animationDelay = `${Math.random() * 10}s`;
			document.body.appendChild(particle);
		}
	</script>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Contenedores con menús desplegables</title>
	<link rel="stylesheet" href="estilos.css">
        <style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #000;
    color: #fff;
    padding: 20px;
    text-align: center;
    border: 1px solid #fff ;
    border-radius: 10px;
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

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

section {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-top: 5;
}

.portada {
  background-color: black;
  height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 color: #fff;
 
}

.portada h1 {
 font-size: 50;
}

.portada p {
 font-size: 163;
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
.fondo-puntos {
  position: absolute;
  top: 0;
  left: 0;
  width:  100%;
  height: 500vh;
  background-color: #000;
  overflow: hidden;
}

.fondo-puntos::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#fff, #fff, #fff);
  background-size: 100px 100px;
  animation: mover 10s linear infinite;
}

@keyframes mover {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(100px, 100px);
  }
}
.contenedor {
  width: 100%;
  height: 50vh;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
}

.rectangulo {
  width: 500;
  height: 400;
  margin-right: ;
  border: 1px solid #ddd;
  display: inline-block;
  opacity: 1; /* Inicialmente visible */
  transition: opacity 0.5s; /* Transición para aparecer/desaparecer */
}

.rectangulo.visible {
  opacity: 1; /* Visible */
}
</style>
<script>
let menu = document.getElementById('menu');
let titulo = document.querySelector('.titulo');
const contenedor = document.querySelector('.contenedor');
const rectangulos = document.querySelectorAll('.rectangulo');

contenedor.addEventListener('scroll', () => {
  const scrollLeft = contenedor.scrollLeft;
  const scrollWidth = contenedor.scrollWidth;
  const clientWidth = contenedor.clientWidth;

  // Aparecer al deslizar
  if (scrollLeft > 0) {
    rectangulos.forEach((rectangulo) => {
      rectangulo.classList.add('visible');
    });
  }

  // Desaparecer al regresar a la posición original
  if (scrollLeft === 0) {
    rectangulos.forEach((rectangulo) => {
      rectangulo.classList.remove('visible');
    });
  }
});

</script>
</head>
</body>