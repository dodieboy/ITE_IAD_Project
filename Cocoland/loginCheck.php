<?php
//SPDX-Short-Identifier: MIT
//(c) 2021 Alan Tan
//This code is licensed under MIT license (See LICENSE.txt for details)
    session_start();
    include 'main.php';
    
    $output = array();
	if (!isset($_SESSION["username"]) || !isset($_SESSION["loggedIn"]) || !isset($_SESSION["role"])) {
		array_push($output,"fail"); 
    }
    else{
        array_push($output,$_SESSION["username"],$_SESSION["role"]); 
    }
    echo json_encode($output);
?> 