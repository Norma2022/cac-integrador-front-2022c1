//Botones Calcular y Categoria
let inputCantidad = document.getElementById("inputCantidad");    //value
let inputCategoria = document.getElementById("inputCategoria");  //value
let totalCompra = document.getElementById("totalCompra");        //value

//Botones Borrar y Resumen
let btnBorrar = document.getElementById("btnBorrar");                //innerHTML
let btnCalcularTotal = document.getElementById("btnCalcularTotal");  //innerHTML


//Funciones Botones

function handlerClick(evt) {
    evt.target.innerHTML = "Compra finalizada";  // Ok
}

function handlerOnBtn(evt) {
    evt.target.innerHTML = "borrar";  // No funciona
}

/*
//Función Resumen TKT -  

function resumen() {  

totalCompra.innerHTML = inputCantidad.value;

if(inputCategoria.value == "estudiante") {
    console.log(200*inputCantidad.value*0.20);                   
} 
else if(inputCategoria.value == "trainee") {
    console.log(200*cantidad*0.50);
}
else (inputCategoria.value == "junior"); {
    console.log(200*cantidad*0.85);
}
}

*/
// S

btnBorrar.onreset = handlerOnBtn;
btnCalcularTotal.onclick = handlerClick;

totalCompra.innerHTML = resumen;

