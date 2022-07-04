//Este pequeño codigo sirve para hacer una lista de tareas. Escucha el boton "Agregar" y añade lo que sea que haya escrito en el cuadro de texto en forma de li
//A la derecha de cada elemento creado existe un boton de eliminar para quitarlo de la lista.

let boton = document.getElementById(boton_agregar);

boton_agregar.addEventListener("click", function () {
  let tarea = document.getElementById("Task");
  let list = document.getElementById("listado");

  let li = document.createElement("li");

  li.innerHTML = `<p>${tarea.value}</p>
                <button class="eliminar">Eliminar de la lista</button>`;

  list.append(li);

  let botones_borrado = document.querySelectorAll(".eliminar");
  document.getElementById("Task").value = "";
  for (let boton of botones_borrado) {
    boton.addEventListener("click", borracion);
  }
});

function borracion(e) {
  let hijo = e.target;
  let padre = hijo.parentNode;
  padre.remove();
}
