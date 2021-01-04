<?php
//SPDX-Short-Identifier: MIT
//(c) 2021 Alan Tan
//This code is licensed under MIT license (See LICENSE.txt for details)
session_start();

include 'main.php';
$tb = 'user';

$UUsername = $_POST["username"];
$UPassword = $_POST["md5Password"];

$sql = "SELECT * FROM $tb WHERE (Username = '$UUsername') & (Password = '$UPassword')";

$result = mysqli_query($conn, $sql);
   
if(mysqli_num_rows($result) == 0){
   print("Error: Username or password is wrong");
}
else{
   $data = mysqli_fetch_row($result);
   $_SESSION["username"] = $data[0];
   $_SESSION["role"] = $data[6];
   $_SESSION["loggedIn"] = 1;
   print("Success Login");
}

?>