<?php
    session_start();
    
    $output = array();
	if (!isset($_SESSION["username"]) || !isset($_SESSION["loggedIn"]) || !isset($_SESSION["role"])) {
		array_push($output,"fail"); 
    }
    else{
        array_push($output,$_SESSION["username"],$_SESSION["role"]); 
    }
    echo json_encode($output);
?> 