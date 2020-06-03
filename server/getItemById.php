<?php
    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");

    _checkSession("cUtente");//mailUtente
    if(!isset($_REQUEST["id"]))
    {
        http_response_code(400);
        die("Parametro mancante: id.");
    }
    //prendere la variabile di sessione
    $con=_connection("nozama");	
    $id=$_REQUEST["id"];
    $sql="select * from item where codice='$id'";
    $item=_eseguiQuery($con, $sql);
    echo(json_encode(array($item)));

    $con->close();
?>