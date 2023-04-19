function calcular() {
  let display = document.getElementById("display");
  let currentValue = display.value;

  // Agregar los listeners a los botones numéricos
  for (let i = 0; i < 10; i++) {
    document.getElementById(i.toString()).addEventListener("click", function () {
      display.value += i.toString();
      console.log(display.value);
    });
  }

  // Agregar los listeners a los botones de operaciones
  document.getElementById("suma").addEventListener("click", function () {
    display.value += "+";
  });
  document.getElementById("resta").addEventListener("click", function () {
    display.value += "-";
  });
  document.getElementById("multiplicacion").addEventListener("click", function () {
    display.value += "*";
  });
  document.getElementById("division").addEventListener("click", function () {
    display.value += "/";
  });

  // Agregar listener al botón de igualdad
  document.getElementById("igual").addEventListener("click", function () {
    let displayValue = display.value;
    if (displayValue.length > 0) {
      display.value = eval(displayValue);
    }
  });

  // Agregar listener al botón de limpiar
  document.getElementById("limpiar").addEventListener("click", function () {
    display.value = "";
  });
}

// mostrar una alerta bootstrap al entrar en la pagina
$(document).ready(function () {
  $("#exampleModal").modal("show");
});
