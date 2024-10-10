let caja = document.querySelector(".contenedor");
let numero1 = 0;
let numero2 = 2;
let numero3 = "3";
let nombre = "Jab";

// Operadores de comparacion
// ==
// ===
// >=
// <=
// !=
// !==

// ! Invertimos valor si es true false
// LA conversion de un valor a False:
// Todos estos valores cuando los convertimos a boleano daran False:
// false | 0 | "" | null | undefined | NaN

// Esto seria true
// Invertimos valor boleano a False
numero2 = !numero2;
// Volvemos a invertir a True no modificamos su valor
dibujar(!numero2); //True
dibujar(numero2); //False

function dibujar(valor) {
  caja.innerHTML += `<div>${valor}</div>`;
  caja.innerHTML += `<div>${nombre}</div>`;
}
