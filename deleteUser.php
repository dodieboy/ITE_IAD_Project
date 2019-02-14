<?php
include 'main.php';

$UUsername = $_POST["username"];
$tb = 'user';

$sql = "DELETE FROM `user` WHERE `Username` = '$UUsername'";

if ($conn->query($sql) == TRUE) {
   print("User Deleted Successfully");
}
else{
    print("Error!!!");
}
?>