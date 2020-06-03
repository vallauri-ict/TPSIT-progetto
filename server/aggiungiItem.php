<?php

    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){		
		
		// 2. connessione e lettura paramertri
        $con=_connection("nozama");
        		
        $desc=$con->real_escape_string($_POST['desc']);
        $nome=$con->real_escape_string($_POST['nome']);
        $img=$con->real_escape_string($_POST['img']);
        $vend=$con->real_escape_string($_POST['vend']);
        $stato=$con->real_escape_string($_POST['stato']);
        $qt=$con->real_escape_string($_POST['qt']);
        $prezzo=$con->real_escape_string($_POST['prezzo']);
			    
		// 3. Query
		$sql = "INSERT INTO item (codice, nome, descrizione, immagine, venditore, stato, quantita, prezzo) VALUES (NULL, '$nome', '$desc', '$img', '$vend', '$stato', '$qt', '$prezzo');";
        $data = _eseguiQuery($con, $sql);
				
		echo json_encode(array($data));
		
		// 5. close
		$con->close();	
	}
?>