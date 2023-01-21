var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");

function encriptar() {
  let textoRecibido = document.getElementById("ingresado").value;
  let reglas = /^[^ÁÉÍÓÚÑáéíóúA-Z]+$/;
  if (textoRecibido != "") {
    if (reglas.test(textoRecibido)) {
      textoRecibido = textoRecibido.replace(/e/gm, "enter");
      textoRecibido = textoRecibido.replace(/i/gm, "imes");
      textoRecibido = textoRecibido.replace(/a/gm, "ai");
      textoRecibido = textoRecibido.replace(/o/gm, "ober");
      textoRecibido = textoRecibido.replace(/u/gm, "ufas");
      document.getElementById("titulo-mostrado").innerHTML = "Texto Encriptado";
      document.getElementById("mostrado").innerHTML = textoRecibido;
      document.getElementById("ingresado").value = "";

      let ocultar = document.getElementById("mostrar1");
      ocultar.style.display = "none";

      let mostrar = document.getElementById("mostrar2");
      mostrar.style.display = "block";
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        background: "white",
        title: "Solo letras minusculas y sin acentos",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } else {
    Swal.fire({
      position: "center",
      icon: "info",
      background: "white",
      title: "Ingrese un texto",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

function desencriptar() {
  let textoRecibido = document.getElementById("ingresado").value;
  let reglas = /^[^ÁÉÍÓÚÑáéíóúA-Z]+$/;
  if (textoRecibido != "") {
    if (reglas.test(textoRecibido)) {
      textoRecibido = textoRecibido.replace(/enter/gm, "e");
      textoRecibido = textoRecibido.replace(/imes/gm, "i");
      textoRecibido = textoRecibido.replace(/ai/gm, "a");
      textoRecibido = textoRecibido.replace(/ober/gm, "o");
      textoRecibido = textoRecibido.replace(/ufas/gm, "u");
      document.getElementById("titulo-mostrado").innerHTML =
        "Texto Desencriptado";
      document.getElementById("mostrado").innerHTML = textoRecibido;
      document.getElementById("ingresado").value = "";

      let ocultar = document.getElementById("mostrar1");
      ocultar.style.display = "none";

      let mostrar = document.getElementById("mostrar2");
      mostrar.style.display = "block";
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        background: "white",
        title: "Solo letras minusculas y sin acentos",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } else {
    Swal.fire({
      position: "center",
      icon: "info",
      background: "white",
      title: "Ingrese un texto",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

function copiar() {
  let copiado = document.querySelector("#mostrado");
  copiado.select();
  document.execCommand("copy");
  Swal.fire({
    position: "center",
    icon: "success",
    background: "white",
    title: "Mensaje Copiado",
    showConfirmButton: false,
    timer: 1500,
  });
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
