<?php
    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");

    _checkSession("cUtente");

    //1. Controllo parametri.
    if(!isset($_REQUEST["password"]))
    {
        http_response_code(400);
        die("Parametro mancante: password.");
    }
    if(!isset($_REQUEST["nome"]))
    {
        http_response_code(400);
        die("Parametro mancante: nome.");
    }
    if(!isset($_REQUEST["indirizzo"]))
    {
        http_response_code(400);
        die("Parametro mancante: indirizzo.");
    }
    if(!isset($_REQUEST["carta"]))
    {
        http_response_code(400);
        die("Parametro mancante: carta.");
    }

    //2. Connessione.
    $con= _connection("nozama");

    //3.Query
    $email=$_SESSION["cUtente"];
    $pass=$_REQUEST["password"];
    $nome=$_REQUEST["nome"];
    $ind=$_REQUEST["indirizzo"];
    $carta=$_REQUEST["carta"];
    $sql="UPDATE utenti SET email='$email', password='$pass', nome='$nome', indirizzo='$ind', carta='$carta'  WHERE email = '$email'";
    $data = _eseguiQuery($con, $sql);
				
    echo json_encode(array($data));

    //4. Chiusura connessione.
    $con->close();
?>