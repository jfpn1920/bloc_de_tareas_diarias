tareas = []
while True:
    print("\n===============================")
    print("     BLOC DE TAREAS DIARIAS")
    print("===============================")
    print("1. Agregar tarea")
    print("2. Ver tareas")
    print("3. Cambiar estado")
    print("4. Eliminar tarea")
    print("5. Ver progreso")
    print("0. Salir")
    opcion = input("Seleccione una opción: ")
    #----------------------#
    #--|agregar_la_tarea|--#
    #----------------------#
    if opcion == "1":
        nombre = input("Ingrese la tarea: ")
        print("Prioridad:")
        print("Alta / Media / Baja")
        prioridad = input("Ingrese prioridad: ")
        tarea = {
            "nombre": nombre,
            "prioridad": prioridad,
            "estado": "Pendiente"
        }
        tareas.append(tarea)
        print("Tarea agregada correctamente")
    #------------------#
    #--|ver_la_tarea|--#
    #------------------#
    elif opcion == "2":
        print("\n===== LISTA DE TAREAS =====")
        if len(tareas) == 0:
            print("No hay tareas registradas")
        else:
            for i, tarea in enumerate(tareas):
                print(f"\n{i + 1}. {tarea['nombre']}")
                print(f"Prioridad: {tarea['prioridad']}")
                print(f"Estado: {tarea['estado']}")
                print("----------------------")
    #-----------------------------------#
    #--|cambiar_el_estado_de_la_tarea|--#
    #-----------------------------------#
    elif opcion == "3":
        if len(tareas) == 0:
            print("No hay tareas disponibles")
        else:
            numero = int(input("Ingrese número de tarea: ")) - 1
            if 0 <= numero < len(tareas):
                print("Nuevo estado:")
                print("Pendiente")
                print("En progreso")
                print("Completada")
                print("Cancelada")
                nuevo_estado = input("Ingrese nuevo estado: ")
                tareas[numero]["estado"] = nuevo_estado
                print("Estado actualizado")
            else:
                print("Número inválido")
    #-----------------------#
    #--|eliminar_la_tarea|--#
    #-----------------------#
    elif opcion == "4":
        if len(tareas) == 0:
            print("No hay tareas para eliminar")
        else:
            numero = int(input("Número de tarea a eliminar: ")) - 1
            if 0 <= numero < len(tareas):
                tareas.pop(numero)
                print("Tarea eliminada")
            else:
                print("Número inválido")
                
    #---------------------------------#
    #--|ver_el_progreso_de_la_tarea|--#
    #---------------------------------#
    elif opcion == "5":
        completadas = 0
        for tarea in tareas:
            if tarea["estado"] == "Completada":
                completadas += 1
        total = len(tareas)
        print("\n===== PROGRESO =====")
        print("Tareas completadas:", completadas)
        print("Tareas totales:", total)
        if total > 0:
            porcentaje = (completadas / total) * 100
            print(f"Progreso: {porcentaje:.2f}%")
        else:
            print("No hay tareas registradas")
    #--------------------#
    #--|salir_del_menu|--#
    #--------------------#
    elif opcion == "0":
        print("Saliendo del sistema...")
        break
    else:
        print("Opción inválida")