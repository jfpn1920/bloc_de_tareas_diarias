import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;
public class bloc_de_tareas_diarias {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        ArrayList<HashMap<String, String>> tareas = new ArrayList<>();
        while (true) {
            System.out.println("\n===============================");
            System.out.println("     BLOC DE TAREAS DIARIAS");
            System.out.println("===============================");
            System.out.println("1. Agregar tarea");
            System.out.println("2. Ver tareas");
            System.out.println("3. Cambiar estado");
            System.out.println("4. Eliminar tarea");
            System.out.println("5. Ver progreso");
            System.out.println("6. Salir");
            System.out.print("Seleccione una opción: ");
            String opcion = entrada.nextLine();
            switch (opcion) {
                //----------------------//
                //--|agregar_la_tarea|--//
                //----------------------//
                case "1":
                    System.out.print("Ingrese la tarea: ");
                    String nombre = entrada.nextLine();
                    System.out.println("Prioridad:");
                    System.out.println("Alta / Media / Baja");
                    System.out.print("Ingrese prioridad: ");
                    String prioridad = entrada.nextLine();
                    HashMap<String, String> tarea = new HashMap<>();
                    tarea.put("nombre", nombre);
                    tarea.put("prioridad", prioridad);
                    tarea.put("estado", "Pendiente");
                    tareas.add(tarea);
                    System.out.println("Tarea agregada correctamente");
                    break;
                //------------------//
                //--|ver_la_tarea|--//
                //------------------//
                case "2":
                    System.out.println("\n===== LISTA DE TAREAS =====");
                    if (tareas.size() == 0) {
                        System.out.println("No hay tareas registradas");
                    } else {
                        for (int i = 0; i < tareas.size(); i++) {
                            System.out.println("\n" + (i + 1) + ". "
                                    + tareas.get(i).get("nombre"));
                            System.out.println("Prioridad: "
                                    + tareas.get(i).get("prioridad"));
                            System.out.println("Estado: "
                                    + tareas.get(i).get("estado"));
                            System.out.println("----------------------");
                        }
                    }
                    break;
                //-----------------------------------//
                //--|cambiar_el_estado_de_la_tarea|--//
                //-----------------------------------//
                case "3":
                    if (tareas.size() == 0) {
                        System.out.println("No hay tareas disponibles");
                    } else {
                        System.out.print("Ingrese número de tarea: ");
                        int numero = Integer.parseInt(entrada.nextLine()) - 1;
                        if (numero >= 0 && numero < tareas.size()) {
                            System.out.println("Nuevo estado:");
                            System.out.println("Pendiente");
                            System.out.println("En progreso");
                            System.out.println("Completada");
                            System.out.println("Cancelada");
                            System.out.print("Ingrese nuevo estado: ");
                            String nuevoEstado = entrada.nextLine();
                            tareas.get(numero).put("estado", nuevoEstado);
                            System.out.println("Estado actualizado");
                        } else {
                            System.out.println("Número inválido");
                        }
                    }
                    break;
                //-----------------------//
                //--|eliminar_la_tarea|--//
                //-----------------------//
                case "4":
                    if (tareas.size() == 0) {
                        System.out.println("No hay tareas para eliminar");
                    } else {
                        System.out.print("Número de tarea a eliminar: ");
                        int eliminar = Integer.parseInt(entrada.nextLine()) - 1;
                        if (eliminar >= 0 && eliminar < tareas.size()) {
                            tareas.remove(eliminar);
                            System.out.println("Tarea eliminada");
                        } else {
                            System.out.println("Número inválido");
                        }
                    }
                    break;
                //---------------------------------//
                //--|ver_el_progreso_de_la_tarea|--//
                //---------------------------------//
                case "5":
                    int completadas = 0;
                    for (int i = 0; i < tareas.size(); i++) {
                        if (tareas.get(i).get("estado")
                                .equalsIgnoreCase("Completada")) {
                            completadas++;
                        }
                    }
                    int total = tareas.size();
                    System.out.println("\n===== PROGRESO =====");
                    System.out.println("Tareas completadas: "
                            + completadas);
                    System.out.println("Tareas totales: "
                            + total);
                    if (total > 0) {
                        double porcentaje =
                                ((double) completadas / total) * 100;
                        System.out.printf("Progreso: %.2f%%\n",
                                porcentaje);
                    } else {
                        System.out.println(
                                "No hay tareas registradas");
                    }
                    break;
                //--------------------//
                //--|salir_del_menu|--//
                //--------------------//
                case "6":
                    System.out.println(
                            "Saliendo del sistema...");
                    entrada.close();
                    return;
                default:
                    System.out.println(
                            "Opción inválida");
                    break;
            }
        }
    }
}