<?php
$servidor = "localhost";
$usuario = "root";
$contrasena = "";
$base_de_datos = "bloc_de_tareas_diarias";
$conexion =
new mysqli(
    $servidor,
    $usuario,
    $contrasena,
    $base_de_datos
);
if($conexion->connect_error){
    die(
        "Error de conexion: " .
        $conexion->connect_error
    );
}
?>