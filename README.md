<!DOCTYPE html>
<html lang="es">
<head>
     <link rel=“stylesheet” href=“css”
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
        <section id="hombres">
            <h2>Ropa para Hombres</h2>
            <div class="producto">
                <img src="img/camisa-hombre.jpg" alt="Camisa Hombre">
                <h3>Camisa Hombre</h3>
                <p>Precio: $50.00</p>
                <button>Comprar</button>
            </div>
            
            <div class="producto">
                <img src="img/pantalones-hombre.jpg" alt="Pantalones Hombre">
                <h3>Pantalones Hombre</h3>
                <p>Precio: $40.00</p>
                <button>Comprar</button>
            </div>
            
        </section>
        <section id="mujeres">
            <h2>Ropa para Mujeres</h2>
            <div class="producto">
                <img src="img/vestido-mujer.jpg" alt="Vestido Mujer">
                <h3>Vestido Mujer</h3>
                <p>Precio: $60.00</p>
                <button>Comprar</button>
            </div>
            <div class="producto">
                <img src="img/falda-mujer.jpg" alt="Falda Mujer">
                <h3>Falda Mujer</h3>
                <p>Precio: $30.00</p>
                <button>Comprar</button>
            </div>
        </section>
        </section>
        <section id="contacto">
            <h2>Información de Contacto</h2>
            <p>Correo electrónico: info@catalogo.com</p>
            <p>Teléfono: 555-555-5555</p>
            <p>Dirección: Calle 123, Ciudad, País</p>
        </section>
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
	<!-- Contenido de la página -->
	<h1>Contenido de la página</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	
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
</body>
</html>