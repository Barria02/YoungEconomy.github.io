//tomamos los elementos
var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var listado = document.getElementById("listado");
var cantidad = document.getElementById("cantidad");

//variable que lleva la cantidad d tareas
var total = 0;

//funcion que agrega la tarea al listado
btn.onclick = function() {
    //controlamos si el campo esta vacio
    if (inputTarea.value =="") {
        return;
    }
//tomamos el valor del campo
var elemento = inputTarea.value;
//creo un elemento li
var li = document.createElement("li");
li.textContent = elemento;
//agrego el li al listado
listado.appendChild(li);

//incrmento la cantidad de tareas

total++;
cantidad.innerHTML = total;

//agregamos el boton eliminar a cada elemento li

var btnEliminar = document.createElement("span");
btnEliminar.textContent = "\u00d7";
li.appendChild(btnEliminar);

//agregamos la uncionalidad que elimina la tarea del listado
btnEliminar.onclick = function()  {
    li.remove();
    total--;
    cantidad.innerHTML = total;
}

//limpiamos el campo input
inputTarea.value = "";
}