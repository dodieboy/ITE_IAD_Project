<!--
SPDX-Short-Identifier: MIT
(c) 2019 Alan Tan
This code is licensed under MIT license (See LICENSE.txt for details)
-->
<?php
session_start();
include 'main.php';

$Address = $_POST["rAddress"];
$Phone = $_POST["rPhone"];
$Name = $_POST["rName"];
$total = $_SESSION["totalPrice"];

$item = "";
foreach($_SESSION["shopping_cart"] as $keys => $values){
    $item = $item."Produce ID: ".$values["item_id"]." quantity: ".$values["item_quantity"].",";
}

$sql = "INSERT INTO `orders`(`orderDetail`, `paid`, `receiverName`, `phoneNumber`, `address`) VALUES ('$item','$total','$Name','$Phone','$Address')";

if ($conn->query($sql) == TRUE) {
   print("Added");
}
else{
   print("Error: ".$conn->error);
}

?>