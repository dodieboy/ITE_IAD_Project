<?php
session_start();
$count = count($_SESSION["shopping_cart"]);
echo $count;
?>