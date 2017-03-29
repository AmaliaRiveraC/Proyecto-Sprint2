

function crearLista() {
    /*Esta funcion crea una nueva lista otorgandole al tiutlo el valor que el usuario a ingresado*/
    var listaPendientes = document.getElementById("listaPendientes");
    var listaCreada = document.createElement("ul");
    listaCreada.id = "nuevaLista";
    listaCreada = document.getElementById("nombreLista");
    listaCreada.innerHTML = document.getElementById("listaUsuario").value;
    listaPendientes.appendChild(listaCreada);
}

function crearPendiente() {
    var pendientes = document.getElementById("pendientes");
    var pendienteCreado = document.createElement("li");
    pendienteCreado.id = "nuevoPendiente";
    pendienteCreado.innerHTML = document.getElementById("pendienteUsuario").value;
    pendientes.appendChild(pendienteCreado);
    console.log(pendienteCreado);
}
    
   /* var titulo = document.createTextNode(tiutloLista);
    listaUsuario.appendChild();
    
    tituloLista = espacioTitulo.value;
    console.log(tituloLista);
    
    console.log(listaCreada);



function crearTitulo() {
    /*Esta funcion pretende tomar el valor del input donde se debria ingresar el titulo de la lista. Y crear un elemento lista utilizando dicho valor
    var espacioTitulo = document.getElementById("nombreLista");
    var titulo = document.getElementById("")
    }
*/