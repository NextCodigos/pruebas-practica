const MINOMBRE="Jab";
const IVA=0.21;
// Pongo return en funcion y no hace falta
// let resultadoFinal;
// Llamo a la funcion


let cantidad = 2;
let precio = 4;

function saludar(saludo){
    escribir(`Hola ${saludo}`);
}
function despedir(despido){
    escribir(`Adios ${despido}`);
}
function media(metros){
    escribir(`La mitad de ${metros} es ${metros / 2}`);
}

function calcularIVA(resultado){
    return resultado*IVA;
}

// Funcion Calcular area del circulo
function areaCirculo(radio){
    return `El area del circulo es ${Math.PI*radio*radio}`;
}
// Funcion calcular el area de un triangulo equilatero
function areaTriangulo(lado){
    return `El area del triangulo equilatero su lado mide${lado} su area es ${lado*lado}`;
}

function escribir(valor){
    // document.querySelector(".caja").innerHTML=valor;
    document.querySelector(".caja").innerHTML+=`<div>${valor}</div>`;
}

// Cantidad * iva guarda en funcion calcularIva en variable resultado
escribir(areaCirculo(10));
escribir(calcularIVA(cantidad*precio));
escribir(areaTriangulo(5 * 5));
saludar("Jose");
despedir("Luis");
media(5);