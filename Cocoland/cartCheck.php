<!--
SPDX-Short-Identifier: MIT
(c) 2019 Alan Tan
This code is licensed under MIT license (See LICENSE.txt for details)
-->
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