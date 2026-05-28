Algoritmo Bloc_De_Tareas
    Definir opcion Como Entero
    Definir i, cantidadTareas Como Entero
    Definir tareas Como Cadena
    Definir prioridades Como Cadena
    Definir estados Como Cadena
    Dimension tareas[100]
    Dimension prioridades[100]
    Dimension estados[100]
    cantidadTareas <- 0
    Repetir
        Escribir "==============================="
        Escribir "     BLOC DE TAREAS DIARIAS"
        Escribir "==============================="
        Escribir "1. Agregar tarea"
        Escribir "2. Ver tareas"
        Escribir "3. Cambiar estado"
        Escribir "4. Eliminar tarea"
        Escribir "5. Ver progreso"
        Escribir "0. Salir"
        Escribir "Seleccione una opcion:"
        Leer opcion
        Segun opcion Hacer
            1:
                cantidadTareas <- cantidadTareas + 1
                Escribir "Ingrese la tarea:"
                Leer tareas[cantidadTareas]
                Escribir "Prioridad:"
                Escribir "Alta / Media / Baja"
                Leer prioridades[cantidadTareas]
                estados[cantidadTareas] <- "Pendiente"
                Escribir "Tarea agregada correctamente"
            2:
                Escribir "===== LISTA DE TAREAS ====="
                Para i <- 1 Hasta cantidadTareas Hacer
                    Escribir i, ". ", tareas[i]
                    Escribir "Prioridad: ", prioridades[i]
                    Escribir "Estado: ", estados[i]
                    Escribir "----------------------"
                FinPara
            3:
                Definir numero Como Entero
                Escribir "Ingrese numero de tarea:"
                Leer numero
                Escribir "Nuevo estado:"
                Escribir "Pendiente"
                Escribir "En progreso"
                Escribir "Completada"
                Escribir "Cancelada"
                Leer estados[numero]
                Escribir "Estado actualizado"
            4:
                Definir eliminar Como Entero
                Escribir "Numero de tarea a eliminar:"
                Leer eliminar
                tareas[eliminar] <- ""
                prioridades[eliminar] <- ""
                estados[eliminar] <- ""
                Escribir "Tarea eliminada"
            5:
                Definir completadas Como Entero
                completadas <- 0
                Para i <- 1 Hasta cantidadTareas Hacer
                    Si estados[i] = "Completada" Entonces
                        completadas <- completadas + 1
                    FinSi
                FinPara
                Escribir "Tareas completadas: ", completadas
                Escribir "Tareas totales: ", cantidadTareas
            0:
                Escribir "Saliendo del sistema..."
            De Otro Modo:
                Escribir "Opcion invalida"
        FinSegun
    Hasta Que opcion = 0	
FinAlgoritmo