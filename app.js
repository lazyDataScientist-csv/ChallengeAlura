const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const botonSortear = document.querySelector('.button-draw')


const listaNombres = [];
//para agregar nombres y limpiar campos
function agregarAmigo() {

    const nombre = inputAmigo.value.trim();

    if (nombre == "") {
        alert ("Por favor, rellena el campo con datos validos.")
        return;
    }

    if (listaNombres.includes(nombre)) {
    alert("Ese nombre ya está en la lista.");
    return;
}


    listaNombres.push(nombre);
    console .log ("Lista actual:", listaNombres);

    const elementoLista = document.createElement('li')
    elementoLista.textContent = nombre;
    listaAmigos.appendChild(elementoLista);

    inputAmigo.value= ""

    if (listaNombres.length > 0) {

        botonSortear.disabled = false;
    }

    inputAmigo.focus();

   
}

//para sortear
function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("Agregue al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    const nombreSorteado = listaNombres[indiceAleatorio];

    resultado.innerHTML = "";

    const elementoResultado = document.createElement('li');
    elementoResultado.textContent = `El amigo secreto es: ${nombreSorteado}`;
    resultado.appendChild(elementoResultado);
}


//console.log(inputAmigo);

