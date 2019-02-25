<?php
	session_start();
	if (isset($_SESSION["username"]) || isset($_SESSION["loggedIn"]) || isset($_SESSION["role"])) {
		if($_POST["type"]=='clear'){
			unset($_SESSION["shopping_cart"]);
		}
		else{
			if($_POST["type"]=='update1'){
				unset($_SESSION["shopping_cart"]);
			}
			if(isset($_SESSION["shopping_cart"]))
			{
				$item_array_id = array_column($_SESSION["shopping_cart"], "item_id");
				if(!in_array($_POST["id"], $item_array_id))
				{
					$count = count($_SESSION["shopping_cart"]);
					$item_array = array(
						'item_id'			=>	$_POST["id"],
						'item_name'			=>	$_POST["name"],
						'item_price'		=>	$_POST["price"],
						'item_quantity'		=>	$_POST["quantity"]
					);
					$_SESSION["shopping_cart"][$count] = $item_array;
					if(strrpos($_POST["type"], "update")===false){
						echo 'Item Added';
					}
				}
				else
				{
					if(strrpos($_POST["type"], "update")===false){
						echo 'You already add to cart';
					}
				}
			}
			else
			{
				$item_array = array(
					'item_id'			=>	$_POST["id"],
					'item_name'			=>	$_POST["name"],
					'item_price'		=>	$_POST["price"],
					'item_quantity'		=>	$_POST["quantity"]
				);
				$_SESSION["shopping_cart"][0] = $item_array;
				if(strrpos($_POST["type"], "update")===false){
					echo 'Item Added';
				}
			}
		}
	}
	else{
		echo 'You much login first';
	}
?>