const MINOMBRE="Jab";
const MINOMBRE2="Jab2";

// Pongo return en funcion y no hace falta
// let resultadoFinal;



function saludar(saludo){
    return escribir(`Hola ${saludo}`);
}


// function escribir(valor){
//     // document.querySelector(".caja").innerHTML=valor;
//     document.querySelector(".caja").innerHTML+=`<div>${valor}</div>`;
// }

// function saludar2(saludo2){
//     return escribir(`Hola ${saludo2}`);
// }
// function saludar3(saludo3){
//     return escribir(`Hola ${saludo3}`);
// }


function escribir(valor2){
    // document.querySelector(".caja").innerHTML=valor;
    document.querySelector(".caja").innerHTML+=`<div>${valor2}</div>`;
}

// Llamo a las funciones

saludar("Jose");
saludar("Jose2");
saludar(MINOMBRE);
saludar(MINOMBRE2);