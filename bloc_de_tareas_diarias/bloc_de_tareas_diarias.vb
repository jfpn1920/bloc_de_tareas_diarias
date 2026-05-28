Imports System
Imports System.Collections.Generic
Module bloc_de_tareas_diarias
    Sub Main(args As String())
        Dim tareas As New List(Of Dictionary(Of String, String))
        While True
            Console.WriteLine(vbCrLf & "===============================")
            Console.WriteLine("     BLOC DE TAREAS DIARIAS")
            Console.WriteLine("===============================")
            Console.WriteLine("1. Agregar tarea")
            Console.WriteLine("2. Ver tareas")
            Console.WriteLine("3. Cambiar estado")
            Console.WriteLine("4. Eliminar tarea")
            Console.WriteLine("5. Ver progreso")
            Console.WriteLine("6. Salir")
            Console.Write("Seleccione una opción: ")
            Dim opcion As String =
                Console.ReadLine()
            Select Case opcion
                '----------------------'
                '--|agregar_la_tarea|--'
                '----------------------'
                Case "1"
                    Console.Write("Ingrese la tarea: ")
                    Dim nombre As String =
                        Console.ReadLine()
                    Console.WriteLine("Prioridad:")
                    Console.WriteLine("Alta / Media / Baja")
                    Console.Write("Ingrese prioridad: ")
                    Dim prioridad As String =
                        Console.ReadLine()
                    Dim tarea As New Dictionary(Of String, String)
                    tarea("nombre") = nombre
                    tarea("prioridad") = prioridad
                    tarea("estado") = "Pendiente"
                    tareas.Add(tarea)
                    Console.WriteLine(
                        "Tarea agregada correctamente")
                '------------------'
                '--|ver_la_tarea|--'
                '------------------'
                Case "2"
                    Console.WriteLine(vbCrLf &
                        "===== LISTA DE TAREAS =====")
                    If tareas.Count = 0 Then
                        Console.WriteLine(
                            "No hay tareas registradas")
                    Else
                        For i As Integer = 0 To tareas.Count - 1
                            Console.WriteLine(vbCrLf &
                                (i + 1).ToString() &
                                ". " &
                                tareas(i)("nombre"))
                            Console.WriteLine(
                                "Prioridad: " &
                                tareas(i)("prioridad"))
                            Console.WriteLine(
                                "Estado: " &
                                tareas(i)("estado"))
                            Console.WriteLine(
                                "----------------------")
                        Next
                    End If
                '-----------------------------------'
                '--|cambiar_el_estado_de_la_tarea|--'
                '-----------------------------------'
                Case "3"
                    If tareas.Count = 0 Then
                        Console.WriteLine(
                            "No hay tareas disponibles")
                    Else
                        Console.Write(
                            "Ingrese número de tarea: ")
                        Dim numero As Integer =
                            Convert.ToInt32(
                                Console.ReadLine()) - 1
                        If numero >= 0 And
                           numero < tareas.Count Then
                            Console.WriteLine(
                                "Nuevo estado:")
                            Console.WriteLine("Pendiente")
                            Console.WriteLine("En progreso")
                            Console.WriteLine("Completada")
                            Console.WriteLine("Cancelada")
                            Console.Write(
                                "Ingrese nuevo estado: ")
                            Dim nuevoEstado As String =
                                Console.ReadLine()
                            tareas(numero)("estado") =
                                nuevoEstado
                            Console.WriteLine(
                                "Estado actualizado")
                        Else
                            Console.WriteLine(
                                "Número inválido")
                        End If
                    End If
                '-----------------------'
                '--|eliminar_la_tarea|--'
                '-----------------------'
                Case "4"
                    If tareas.Count = 0 Then
                        Console.WriteLine(
                            "No hay tareas para eliminar")
                    Else
                        Console.Write(
                            "Número de tarea a eliminar: ")
                        Dim eliminar As Integer =
                            Convert.ToInt32(
                                Console.ReadLine()) - 1
                        If eliminar >= 0 And
                           eliminar < tareas.Count Then
                            tareas.RemoveAt(eliminar)
                            Console.WriteLine(
                                "Tarea eliminada")
                        Else
                            Console.WriteLine(
                                "Número inválido")
                        End If
                    End If
                '---------------------------------'
                '--|ver_el_progreso_de_la_tarea|--'
                '---------------------------------'
                Case "5"
                    Dim completadas As Integer = 0
                    For Each tarea In tareas
                        If tarea("estado").ToLower() =
                            "completada" Then
                            completadas += 1
                        End If
                    Next
                    Dim total As Integer =
                        tareas.Count
                    Console.WriteLine(vbCrLf &
                        "===== PROGRESO =====")
                    Console.WriteLine(
                        "Tareas completadas: " &
                        completadas)
                    Console.WriteLine(
                        "Tareas totales: " &
                        total)
                    If total > 0 Then
                        Dim porcentaje As Double =
                            (completadas / total) * 100
                        Console.WriteLine(
                            "Progreso: " &
                            porcentaje.ToString("0.00") &
                            "%")
                    Else
                        Console.WriteLine(
                            "No hay tareas registradas")
                    End If
                '--------------------'
                '--|salir_del_menu|--'
                '--------------------'
                Case "6"
                    Console.WriteLine(
                        "Saliendo del sistema...")
                    Exit While
                Case Else
                    Console.WriteLine(
                        "Opción inválida")
            End Select
        End While
    End Sub
End Module