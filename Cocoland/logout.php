<!--
SPDX-Short-Identifier: MIT
(c) 2019 Alan Tan
This code is licensed under MIT license (See LICENSE.txt for details)
-->
<?php
    session_start();
    
    unset($_SESSION["email"]);
    unset($_SESSION["loggedIn"]);
    unset($_SESSION["shopping_cart"]);
    session_destroy();
    header('Location: index.html');
?>