<?php
    session_start();
    
    unset($_SESSION["email"]);
    unset($_SESSION["loggedIn"]);
    unset($_SESSION["shopping_cart"]);
    session_destroy();
    header('Location: index.html');
?>