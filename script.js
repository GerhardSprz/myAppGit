
const imagenes = document.querySelectorAll(".carrusel img");

function cambiarImagen() {
  // Quitar la clase activa de la actual
  const activa = document.querySelector(".carrusel img.active");
  activa.classList.remove("active");

  // Elegir una imagen al azar
  let random;
  do {
    random = Math.floor(Math.random() * imagenes.length);
  } while (imagenes[random] === activa); // Evitar que se repita la misma

  imagenes[random].classList.add("active");
}

// Cambiar cada 3 segundos
setInterval(cambiarImagen, 3000);

