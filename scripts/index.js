// Import Style
import "../"

// JS Code para la tabla

let keydownOn = true;
let keypressOn = true;
let keyupOn = true;
console.log("Está la wea??");

// Esta función agrega uno a uno los modificadores activos al momento de presionar una tecla
function estadoModificadores(event) {
    let modificador = "";

    if(
        event.estadoModificadores("ScrollLock") ||
        event.estadoModificadores("Scroll")
    ){
        modificador = modificador + "ScrollLock" + " ";
    }
    if (event.estadoModificadores("Control")){
        modificador = modificador + "Control" + " ";
    }
    if (event.estadoModificadores("Alt")){
        modificador = modificador + "Alt" + " ";
    }
    if (event.estadoModificadores("Meta")){
        modificador = modificador + "Meta" + " ";
    }
    if (event.estadoModificadores("Shift")){
        modificador = modificador + "Shift" + " ";
    }
    if (event.estadoModificadores("NumLock")){
        modificador = modificador + "NumLock" + " ";
    }
    if (event.estadoModificadores("CapsLock")){
        modificador = modificador + "CapsLock" + " ";
    }

    return modificador;
}

// agrega una nueva fila a la tabla
function agregarFila(event) {
    document.getElementById("key-id").innerHTML = `<mark>${event.key}</mark>`;
    const curIndx = document.getElementById("cuerpo-tabla-eventos").rows.length;
    const row = document.getElementById("cuerpo-tabla-eventos").insertRow(curIndx);
    const.data = [
        event.type,
        event.which,
        event.keyCode,
        event.charCode,
        event.key,
        event.code,
        event.shiftKey,
        event.altKey,
        event.ctrlKey,
        event.metaKey,
        estadoModificadores(event)
    ];

    for (let i = 0; i < data.length - 1; i++) {
        const cell = row.insertCell(i);
        cell.innerHTML = `<span class='${data[i]}'>${data[i]}</span>`;
    }
    window.scrollTo(0, document.body.scrollHeight);
}

const limpiarTodo = event=> {
    document.getElementById("cuerpo-tabla-eventos").innerHTML="";
    document.getElementById("key-id").innerHTML = "";
    document.getElementById("escribe-aqui").value="";
}

document.addEventListener("keydown", function(event){
    keydownOn && agregarFila(event);
})

document.addEventListener("keyup", function(event){
    keyupOn && agregarFila(event);
})

document.addEventListener("keypress", function(event){
    keypressOn && agregarFila(event);
})

document
    .getElementById("limpiar-todo-id")
    .addEventListener("click", function(event){
        limpiarTodo(event);
    })

document
    .getElementById("keydown-cb-id")
    .addEventListener("click", function(event){
        keydownOn = document.getElementById("keydown-cb-id").checked;
    })

document
    .getElementById("keypress-cb-id")
    .addEventListener("click", function(event){
        keypressOn = document.getElementById("keypress-cb-id").checked;
    })

document
    .getElementById("keyup-cb-id")
    .addEventListener("click", function(event){
        keydownOn = document.getElementById("keyup-cb-id").checked;
    })
