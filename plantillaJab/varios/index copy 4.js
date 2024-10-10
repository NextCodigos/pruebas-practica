const MINOMBRE="Jab";

// Pongo return en funcion y no hace falta
// let resultadoFinal;



function saludar(saludo){
    return escribir(`Hola ${saludo}`);
}


function escribir(valor){
    // document.querySelector(".caja").innerHTML=valor;
    document.querySelector(".caja").innerHTML+=`<div>${valor}</div>`;
}

// Llamo a las funciones

saludar("Jose");
