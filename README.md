<!DOCTYPE html>
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
    <img src="imagen2.jpg" alt="Imagen 2">
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
</head>

</html>
</body>
</html>