const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Para evitar que el formulario se envíe

  if (form.checkValidity()) {
    alert('Contacto exitosamente');
  } else {
    alert('Por favor, rellene todos los campos del formulario correctamente');
  }
});

