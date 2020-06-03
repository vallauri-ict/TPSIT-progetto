<?php

    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");

    //_checkSession("cUtente");

    $con=_connection("nozama");	
    $sql="select * from item;";
    $data=_eseguiQuery($con, $sql);
    echo(json_encode(array($data)));

    $con->close();
?>