

function crearLista() {
    /*Esta funcion crea una nueva lista otorgandole al tiutlo el valor que el usuario a ingresado*/
    /*var listaPendientes = document.getElementById("listaPendientes");
    var listaCreada = document.createElement("ul");
    listaCreada.id = "nuevaLista";
    listaCreada = document.getElementById("nombreLista");
    listaCreada.innerHTML = document.getElementById("listaUsuario").value;
    listaPendientes.appendChild(listaCreada);*/
    var listaNodo = document.getElementById("listaPendientes");
    var nuevaLista = listaNodo.cloneNode(true);
    nuevaLista = document.getElementById("nombreLista");
    var listaUsuario = document.getElementById("listaUsuario");
    nuevaLista.innerHTML = listaUsuario.value;
    listaNodo.appendChild(nuevaLista);
    nuevaLista.id = new Date();
    listaNodo.insertBefore(nuevaLista, listaNodo.firstChild);
    console.log(listaNodo);
    listaUsuario.value = " ";
    
    console.log(nuevaLista);
}

function crearPendiente() {
    //Esta funcion crea un nuevo pendiente dentro de nuestra lista
    var pendientes = document.getElementById("pendientes");
    var pendienteCreado = document.createElement("li");
    pendienteCreado.id = "nuevoPendiente";
    var pendientesUsuario = document.getElementById("pendienteUsuario");
    pendienteCreado.innerHTML = pendientesUsuario.value + " " + "<span onclick='eliminar(this)'>X </span>";
    pendientes.appendChild(pendienteCreado);
    pendientesUsuario. value = " ";
}
    
function eliminar(elemento) {
    /*Esta funcion consigue eliminar los pendientes de manera independiente*/
    var id=elemento.parentNode.getAttribute("id");
    node=document.getElementById(id);
    node.parentNode.removeChild(node);
}

function Lista = {
    this.titulo = titulo;
    this.input = document.getElementById("pendienteUsuario");
}

