document.getElementById("formCita").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const mascota = document.getElementById("mascota").value;
  const servicio = document.getElementById("servicio").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  const mensaje = `¡Gracias ${nombre}! Tu cita para ${mascota} ha sido agendada para ${fecha} a las ${hora} (${servicio}).`;
  document.getElementById("mensajeConfirmacion").textContent = mensaje;

  this.reset(); // Limpia el formulario
});

document.getElementById("formCita").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const mascota = document.getElementById("mascota").value;
  const servicio = document.getElementById("servicio").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  const mensajeWhatsApp = `Hola, quiero agendar una cita para mi mascota:\n\n🐾 Nombre del dueño: ${nombre}\n🐶 Mascota: ${mascota}\n📋 Servicio: ${servicio}\n📅 Fecha: ${fecha}\n⏰ Hora: ${hora}`;
  const url = "https://wa.me/573207209035?text=" + encodeURIComponent(mensajeWhatsApp);

  // Redirige automáticamente a WhatsApp
  window.open(url, "_blank");

  // Opcional: limpia el formulario
  this.reset();
});