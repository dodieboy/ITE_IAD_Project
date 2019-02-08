<?php
    session_start();
    
    unset($_SESSION["email"]);
    unset($_SESSION["loggedIn"]);
    session_destroy();
    header('Location: index.html');
?>