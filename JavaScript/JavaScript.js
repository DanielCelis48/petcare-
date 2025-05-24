// Obtiene el elemento de imagen del banner por su ID
const banner = document.getElementById("Baner");

// Arreglo con las rutas de las imágenes del banner
const imagenes = [
    "Multimedia/Imajenes/Baner1.webp",  // Imagen 1 del banner
    "Multimedia/Imajenes/Baner2.webp",  // Imagen 2 del banner
    "Multimedia/Imajenes/Baner3.webp"   // Imagen 3 del banner
];

// Inicializa el índice para recorrer el arreglo de imágenes
let indice = 0;

// Cambia la imagen del banner cada 6 segundos
setInterval(() => {
    indice = (indice + 1) % imagenes.length;  // Aumenta el índice y vuelve a 0 al final del arreglo
    banner.style.opacity = 0;  // Oculta la imagen actual con una transición de opacidad
    setTimeout(() => {
        banner.src = imagenes[indice];  // Cambia la imagen del banner a la siguiente en el arreglo
        banner.style.opacity = 1;       // Vuelve a mostrar la imagen con transición de opacidad
    }, 1500);  // Espera 1.5 segundos antes de cambiar la imagen
}, 6000);  // Ejecuta esta función cada 6 segundos

// Agrega un comportamiento de scroll suave a los enlaces con ancla (href="#...")
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (event) {
        const destino = document.querySelector(this.getAttribute('href'));  // Obtiene el destino del ancla
        if (destino) {  // Si existe el destino...
            event.preventDefault();  // Previene el comportamiento por defecto del enlace
            destino.scrollIntoView({ behavior: 'smooth' });  // Hace scroll suave hacia el destino
        }
    });
});

// Muestra el modal cuando se hace clic en el botón "Leer más..."
document.getElementById("btnLeerMas").addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";  // Cambia el estilo para mostrar el modal
});

// Cierra el modal cuando se hace clic en la "X"
document.getElementById("cerrarModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";  // Oculta el modal
});

// Cierra el modal si se hace clic fuera del contenido del modal
window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("modal")) {  // Verifica si se hizo clic en el fondo oscuro
        document.getElementById("modal").style.display = "none";  // Oculta el modal
    }
});

// Abre o cierra el menú hamburguesa al hacer clic en el botón ☰
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("menu-list").classList.toggle("show");  // Alterna la clase 'show' para mostrar/ocultar el menú
});

// Muestra el carrito flotante al hacer clic en el ícono del carrito
document.querySelector('#BlockMenu4 a').addEventListener('click', function(e) {
    e.preventDefault();  // Previene el comportamiento por defecto del enlace
    document.getElementById('carritoFlotante').classList.add('abierto');  // Añade la clase 'abierto' para mostrar el carrito
});

// Cierra el carrito flotante al hacer clic en la "X"
document.getElementById('cerrarCarrito').addEventListener('click', function() {
    document.getElementById('carritoFlotante').classList.remove('abierto');  // Elimina la clase 'abierto' para ocultar el carrito
});
