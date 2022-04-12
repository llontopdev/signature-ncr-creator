//Definimos el botón para escuchar su click
const $boton = document.querySelector("#btnCapturar"), // El botón que desencadena
  $objetivo = document.querySelector("#signature"); // A qué le tomamos la foto

// Agregar el listener al botón
$boton.addEventListener("click", () => {
  html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
    .then(canvas => {
      let nombre = document.querySelector(".firma_nombre").innerHTML.replace(" ","_");      
      // Cuando se resuelva la promesa traerá el canvas
      // Crear un elemento <a>
      let enlace = document.createElement('a');
      enlace.download = `Signature_${nombre}.png`;
      // Convertir la imagen a Base64
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
    });
});