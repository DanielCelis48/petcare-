// Obtenemos los elementos necesarios
const btnMostrarRegistro = document.getElementById('mostrar-registro'); // Botón para mostrar el formulario de registro
const btnMostrarInicio = document.getElementById('mostrar-inicio');     // Botón para volver al formulario de inicio de sesión
const formularioInicio = document.querySelector('.inicio-sesion');      // Contenedor del formulario de inicio de sesión
const formularioRegistro = document.querySelector('.registro');         // Contenedor del formulario de registro

// Mostrar el formulario de registro
btnMostrarRegistro.addEventListener('click', (e) => {                   // Escucha el clic en el botón de registro
  e.preventDefault();                                                   // Previene el comportamiento por defecto del enlace
  formularioInicio.classList.add('oculto');                             // Oculta el formulario de inicio de sesión
  formularioRegistro.classList.remove('oculto');                        // Muestra el formulario de registro
});

// Volver al formulario de inicio de sesión
btnMostrarInicio.addEventListener('click', (e) => {                     // Escucha el clic en el botón de inicio
  e.preventDefault();                                                   // Previene el comportamiento por defecto del enlace
  formularioRegistro.classList.add('oculto');                           // Oculta el formulario de registro
  formularioInicio.classList.remove('oculto');                          // Muestra el formulario de inicio de sesión
});

// Botón para alternar tema
const btnTema = document.querySelector('.boton-tema');                  // Selecciona el botón de cambio de tema

btnTema.addEventListener('click', () => {                               // Al hacer clic en el botón de tema
  document.body.classList.toggle('tema-oscuro');                        // Alterna la clase 'tema-oscuro' en el <body>
  btnTema.textContent = document.body.classList.contains('tema-oscuro') // Cambia el ícono según el tema activo
    ? '☀️'                                                               // Si el tema oscuro está activado, muestra el sol
    : '🌙';                                                              // Si no, muestra la luna
});

const formularioInicioSesion = document.getElementById('form-inicio'); // Selecciona el formulario de inicio de sesión (nota: este ID no existe en el HTML actual)

formularioInicioSesion.addEventListener('submit', function(e) {         // Al enviar el formulario
  e.preventDefault();                                                   // Evita que el formulario se envíe normalmente
  // Aquí puedes agregar validación si es necesario
  window.location.href = "index.html";                                  // Redirige a la página principal
});
