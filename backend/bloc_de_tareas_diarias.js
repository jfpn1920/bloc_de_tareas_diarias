//-----------------------------------------//
//-|funcionalidad_bloc_de_tareas_diarias|--//
//-----------------------------------------//
const inputTareaFormulario =
document.getElementById("inputTarea");
const selectPrioridadFormulario =
document.getElementById("selectPrioridad");
const selectCategoriaFormulario =
document.getElementById("selectCategoria");
const btnAgregarFormulario =
document.getElementById("btnAgregar");
btnAgregarFormulario.addEventListener(
    "click",
    function(){
        let tarea =
        inputTareaFormulario.value;
        let prioridad =
        selectPrioridadFormulario.value;
        let categoria =
        selectCategoriaFormulario.value;
        if(
            tarea !== "" &&
            prioridad !== "Ninguna prioridad..." &&
            categoria !== "Ninguna categoria..."
        ){
            fetch(
                "bloc_de_tareas_diarias.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                        "application/x-www-form-urlencoded"
                    },
                    body:
                    `accion=crear&tarea=${encodeURIComponent(tarea)}&prioridad=${encodeURIComponent(prioridad)}&categoria=${encodeURIComponent(categoria)}`
                }
            )
            .then(
                function(respuesta){
                    return respuesta.json();
                }
            )
            .then(
                function(resultado){
                    if(resultado.success){
                        agregarTareaAlTablero(
                            resultado.id,
                            tarea,
                            prioridad,
                            categoria
                        );
                        alert(
                            "Se a creado la tarea correctamente"
                        );
                        inputTareaFormulario.value = "";
                        selectPrioridadFormulario.selectedIndex = 0;
                        selectCategoriaFormulario.selectedIndex = 0;
                    }
                }
            )
            .catch(
                function(error){
                    console.log(error);
                    alert(
                        "Error al guardar la tarea"
                    );
                }
            );
        }
        else{
            alert(
                "No se a creado ningun dato"
            );
        }
    }
);
//--------------------------------------------//
//-|funcionalidad_resumen_progresiva_tareas|--//
//--------------------------------------------//
const tareasCompletadas =
document.getElementById(
    "tareasCompletadas"
);
const tareasPendientes =
document.getElementById(
    "tareasPendientes"
);
const progresoTareas =
document.getElementById(
    "progresoTareas"
);
function actualizarResumenTareas(){
    let completadas = 0;
    let pendientes = 0;
    let enProgreso = 0;
    tareasGuardadas.forEach(
        function(tarea){
            if(
                tarea.progreso.toLowerCase() ===
                "completado"
            ){
                completadas++;
            }
            else if(
                tarea.progreso.toLowerCase() ===
                "pendiente"
            ){
                pendientes++;
            }
            else if(
                tarea.progreso.toLowerCase() ===
                "en progreso"
            ){
                enProgreso++;
            }
        }
    );
    tareasCompletadas.textContent =
    completadas;
    tareasPendientes.textContent =
    pendientes;
    progresoTareas.textContent =
    enProgreso;
}
//---------------------------------------------//
//-|funcionalidad_tablero_de_lista_de_tareas|--//
//---------------------------------------------//
const listaTareasTablero =
document.getElementById("listaTareas");
let tareasGuardadas =
JSON.parse(
    localStorage.getItem("tareas")
) || [];
function guardarLocalStorage(){
    localStorage.setItem(
        "tareas",
        JSON.stringify(tareasGuardadas)
    );
}
function mostrarMensajeVacio(){
    if(tareasGuardadas.length === 0){
        listaTareasTablero.innerHTML = `
            <tr>
                <td
                    colspan="5"
                    class="mensaje_vacio"
                    id="mensajeVacio"
                >
                    Ningun bloc añadido en el tablero
                </td>
            </tr>
        `;
    }
}
function crearFilaTarea(
    tareaObjeto,
    indice
){
    const mensajeVacioExistente =
    document.getElementById("mensajeVacio");
    if(mensajeVacioExistente){
        mensajeVacioExistente.remove();
    }
    let fila =
    document.createElement("tr");
    fila.innerHTML = `
        <td>${tareaObjeto.tarea}</td>
        <td>${tareaObjeto.prioridad}</td>
        <td>${tareaObjeto.categoria}</td>
        <td class="estado_en_progreso">
            ${tareaObjeto.progreso}
        </td>
        <td>
            <i class="fa-solid fa-pen-to-square btn_editar"></i>
            <i class="fa-solid fa-trash btn_eliminar"></i>
        </td>
    `;
    /*-------------------------*/
    /*--|boton_editar_tareas|--*/
    /*-------------------------*/
    const btnEditar =
    fila.querySelector(".btn_editar");
    btnEditar.addEventListener(
        "click",
        function(){
            let nuevaTarea =
            prompt(
                "Editar tarea",
                tareaObjeto.tarea
            );
            let nuevaPrioridad =
            prompt(
                "Editar prioridad",
                tareaObjeto.prioridad
            );
            let nuevaCategoria =
            prompt(
                "Editar categoria",
                tareaObjeto.categoria
            );
            let nuevoProgreso =
            prompt(
                "Editar progreso",
                tareaObjeto.progreso
            );
            if(
                nuevaTarea &&
                nuevaPrioridad &&
                nuevaCategoria &&
                nuevoProgreso
            ){
                tareaObjeto.tarea =
                nuevaTarea;
                tareaObjeto.prioridad =
                nuevaPrioridad;
                tareaObjeto.categoria =
                nuevaCategoria;
                tareaObjeto.progreso =
                nuevoProgreso;
                fetch(
                    "bloc_de_tareas_diarias.php",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                            "application/x-www-form-urlencoded"
                        },
                        body:
                        `accion=editar&id=${encodeURIComponent(tareaObjeto.id)}&tarea=${encodeURIComponent(nuevaTarea)}&prioridad=${encodeURIComponent(nuevaPrioridad)}&categoria=${encodeURIComponent(nuevaCategoria)}&progreso=${encodeURIComponent(nuevoProgreso)}`
                    }
                )
                .then(
                    function(respuesta){
                        return respuesta.json();
                    }
                )
                .then(
                    function(resultado){
                        console.log(resultado);
                    }
                );
                guardarLocalStorage();
                renderizarTablero();
                actualizarResumenTareas();
            }
        }
    );
    /*---------------------------*/
    /*--|boton_eliminar_tareas|--*/
    /*---------------------------*/
    const btnEliminar =
    fila.querySelector(".btn_eliminar");
    btnEliminar.addEventListener(
        "click",
        function(){
            fetch(
                "bloc_de_tareas_diarias.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                        "application/x-www-form-urlencoded"
                    },
                    body:
                    `accion=eliminar&id=${encodeURIComponent(tareaObjeto.id)}`
                }
            )
            .then(
                function(respuesta){
                    return respuesta.json();
                }
            )
            .then(
                function(resultado){
                    console.log(resultado);
                }
            );
            tareasGuardadas.splice(
                indice,
                1
            );
            guardarLocalStorage();
            renderizarTablero();
            actualizarResumenTareas();
        }
    );
    listaTareasTablero.prepend(fila);
}
function agregarTareaAlTablero(
    id,
    tarea,
    prioridad,
    categoria
){
    const nuevaTarea = {
        id,
        tarea,
        prioridad,
        categoria,
        progreso: "En progreso"
    };
    tareasGuardadas.push(
        nuevaTarea
    );
    guardarLocalStorage();
    renderizarTablero();
    actualizarResumenTareas();
}
function renderizarTablero(){
    listaTareasTablero.innerHTML = "";
    tareasGuardadas.forEach(
        function(
            tareaObjeto,
            indice
        ){
            crearFilaTarea(
                tareaObjeto,
                indice
            );
        }
    );
    mostrarMensajeVacio();
}
renderizarTablero();
actualizarResumenTareas();