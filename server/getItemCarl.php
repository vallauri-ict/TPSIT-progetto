<?php
    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");

    _checkSession("cUtente");//mailUtente
    //prendere la variabile di sessione
    $con=_connection("nozama");	
    $idSession=$_SESSION["cUtente"];
    $sql="select carrello from utenti where email='$idSession'";
    $item=_eseguiQuery($con, $sql);
    echo(json_encode(array($item)));

    $con->close();
?>