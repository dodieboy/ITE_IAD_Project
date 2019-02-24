<?php
    session_start();
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
            echo 'Item Added';
		}
		else
		{
			echo 'You already add to cart';
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
        echo 'Item Added';
	}
?>