<?php
include("conexion.php");
if(
    $_SERVER["REQUEST_METHOD"] == "POST" &&
    $_POST["accion"] == "crear"
){
    $tarea =
    $_POST["tarea"];
    $prioridad =
    $_POST["prioridad"];
    $categoria =
    $_POST["categoria"];
    $progreso =
    "En progreso";
    $sql =
    "INSERT INTO tareas_diarias
    (
        tarea,
        prioridad,
        categoria,
        progreso
    )
    VALUES
    (
        '$tarea',
        '$prioridad',
        '$categoria',
        '$progreso'
    )";
    if($conexion->query($sql) === TRUE){
        echo json_encode(
            [
                "success" => true,
                "id" => $conexion->insert_id
            ]
        );
    }
    else{
        echo json_encode(
            [
                "success" => false
            ]
        );
    }
}
/*------------------*/
/*--|editar_tarea|--*/
/*------------------*/
if(
    $_SERVER["REQUEST_METHOD"] == "POST" &&
    $_POST["accion"] == "editar"
){
    $id =
    $_POST["id"];
    $tarea =
    $_POST["tarea"];
    $prioridad =
    $_POST["prioridad"];
    $categoria =
    $_POST["categoria"];
    $progreso =
    $_POST["progreso"];
    $sql =
    "UPDATE tareas_diarias
    SET
        tarea = '$tarea',
        prioridad = '$prioridad',
        categoria = '$categoria',
        progreso = '$progreso'
    WHERE id = '$id'";
    if($conexion->query($sql) === TRUE){
        echo json_encode(
            [
                "success" => true
            ]
        );
    }
    else{
        echo json_encode(
            [
                "success" => false
            ]
        );
    }
}
/*--------------------*/
/*--|eliminar_tarea|--*/
/*--------------------*/
if(
    $_SERVER["REQUEST_METHOD"] == "POST" &&
    $_POST["accion"] == "eliminar"
){
    $id =
    $_POST["id"];
    $sql =
    "DELETE FROM tareas_diarias
    WHERE id = '$id'";
    if($conexion->query($sql) === TRUE){
        echo json_encode(
            [
                "success" => true
            ]
        );
    }
    else{
        echo json_encode(
            [
                "success" => false
            ]
        );
    }
}
$conexion->close();
?>