<?php
//SPDX-Short-Identifier: MIT
//(c) 2021 Alan Tan
//This code is licensed under MIT license (See LICENSE.txt for details)
session_start();
if(!empty($_SESSION["shopping_cart"])){
    $item = array();
	foreach($_SESSION["shopping_cart"] as $keys => $values){
        array_push($item,$values["item_id"],$values["item_name"],$values["item_price"],$values["item_quantity"]);
    }
    echo json_encode($item);
}else{
    echo json_encode("empty");
}
?>