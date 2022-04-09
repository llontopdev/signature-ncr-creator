function GenerarFirma(){
  const nombre = document.getElementById("input_nombre").value;
  const puesto = document.getElementById("input_puesto").value;
  const telefono = document.getElementById("input_telefono").value;
  const pais = document.getElementById("input_pais").value;

  document.querySelector(".firma_nombre").innerHTML = `${nombre}`;
  document.querySelector(".firma_puesto").innerHTML = `${puesto}`;
  document.querySelector(".firma_telefono").innerHTML = `${telefono}`;
  document.querySelector(".firma_pais").innerHTML = `${pais}`;
}