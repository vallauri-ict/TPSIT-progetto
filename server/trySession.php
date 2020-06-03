<?php
    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");

    _checkSession("cUtente");//mailUtente
    $con=_connection("nozama");		
    $email = $_SESSION["cUtente"];
    $sql = "select * from utenti where email='$email'";	
    $data = _eseguiQuery($con, $sql);
    echo json_encode(array("nome"=>$data[0]["nome"]));

    $con->close();
?>