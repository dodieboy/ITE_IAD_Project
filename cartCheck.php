<?php
session_start();
if(isset($_SESSION["shopping_cart"])){
    $count = count($_SESSION["shopping_cart"]);
}
else{
    $count = 0;
}
echo $count;
?>