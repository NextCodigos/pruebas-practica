// Javascript es de tipo dinámico,
// Podemos cambiar el valor de la variable

// Tipos de valores
// Cuando dejo vacía sin ningún tipo de valor
// Con CONST no se puede dejar vacia
let usuario; // Undefined
console.log(typeof usuario); // undefined
escribir(typeof usuario); // undefined

// Quiero crear una variable sin valor inicial
let usuario2 = null;
console.log(typeof usuario2); // object
console.log(usuario2); // null
escribir(typeof usuario2); // object
escribir(usuario2); // null

let edad = 25;
let nota = 10.6;
let nombre = "Jab";
let nombre2 = "Jab";
let nombre3 = `Jab`;

// Ocupan un bit, sin comillas
let vivo = true;
let vivo2 = false;
let vivo3 = 1;

// Array: No se aconseja mezclar strings y numbers
let nombres = ["Jab", 1, "Javier"];
console.log(nombres[0]); // "Jab"
console.log(nombres[1]); // 1
escribir(nombres[0]); // "Jab"
escribir(nombres[1]); // 1

let edades = [10, 20, 50];
console.log(edades[0]); // 10
console.log(edades[1]); // 20
console.log(edades[2]); // 50
escribir(edades[0]); // 10
escribir(edades[1]); // 20
escribir(edades[2]); // 50

// Objeto
let persona = {
  nombre: "Jab",
  edad: 25,
};
console.log(persona); // { nombre: 'Jab', edad: 25 }
console.log(persona.edad); // 25
console.log(persona["nombre"]); // "Jab"
escribir(persona); // { nombre: 'Jab', edad: 25 }
escribir(persona.edad); // 25
escribir(persona["nombre"]); // "Jab"

// Arrays de objetos
let personas = [
  {
    nombre: "Jab",
    edad: 25,
    nivel: 3,
  },
  {
    nombre: "Javier",
    edad: 18,
    nivel: 4,
  },
];
console.log(personas);
escribir(personas);
// [
//     { nombre: 'Jab', edad: 25, nivel: 3 },
//     { nombre: 'Javier', edad: 18, nivel: 4 }
// ]
console.log(personas[0].nombre); // "Jab"
console.log(personas[1].nombre); // "Javier"
console.log(personas[1].edad); // 18
console.log(personas[1].nivel); // 4
escribir(personas[0].nombre); // "Jab"
escribir(personas[1].nombre); // "Javier"
escribir(personas[1].edad); // 18
escribir(personas[1].nivel); // 4

// NaN
let a = "Jab";
let n = 8;
let resultado = a / n;
console.log(resultado); // NaN
escribir(resultado); // NaN

// Podemos cambiar el tipo de abajo e una variable
let name = "Jab";
name = 56;
name = true;
name = null;
console.log(typeof name); // object
escribir(typeof name); // object

function escribir(valor) {
  // document.querySelector(".caja").innerHTML=valor;
  document.querySelector(".caja").innerHTML += `<div>${valor}</div>`;
}