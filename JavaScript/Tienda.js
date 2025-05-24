  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (event) {
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        event.preventDefault();
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

    document.querySelector('#BlockMenu4 a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('carritoFlotante').classList.add('abierto');
  });

  // Abrir carrito
  document.querySelector('#BlockMenu4 a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('carritoFlotante').classList.add('abierto');
  });

  // Cerrar carrito
  document.getElementById('cerrarCarrito').addEventListener('click', function() {
    document.getElementById('carritoFlotante').classList.remove('abierto');
  });