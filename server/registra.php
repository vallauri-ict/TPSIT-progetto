<?php

    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){		
		
		// 2. connessione e lettura paramertri
        $con=_connection("nozama");
        		
        $email=$con->real_escape_string($_POST['email']);
        $nome=$con->real_escape_string($_POST['nome']);
        $password=$con->real_escape_string($_POST['password']);
        $carrello="";
        $indirizzo=$con->real_escape_string($_POST['indirizzo']);
        $carta=$con->real_escape_string($_POST['carta']);
			    
		// 3. Query
		$sql = "INSERT INTO utenti (email, nome, password, carrello, indirizzo, carta) VALUES ('$email', '$nome', '$password', '$carrello', '$indirizzo', '$carta');";
        $data = _eseguiQuery($con, $sql);
				
		echo json_encode(array($data));
		
		// 5. close
		$con->close();	
	}
?>