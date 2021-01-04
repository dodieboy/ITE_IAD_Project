<?php
//SPDX-Short-Identifier: MIT
//(c) 2021 Alan Tan
//This code is licensed under MIT license (See LICENSE.txt for details)
include 'main.php';
$tb = 'user';

$UUsername = $_POST["username"];
$UPassword = $_POST["md5Password"];
$UName = $_POST["fullname"];
$UEmail = $_POST["email"];
$UPhone = $_POST["phone"];
$UGender = $_POST["gender"];

$sql = "INSERT INTO `user`(`Username`, `Name`, `Password`, `Email`, `Gender`, `Phone`,`ROLE`) VALUES ('$UUsername','$UName','$UPassword','$UEmail','$UGender','$UPhone','N')";

if ($conn->query($sql) == TRUE) {
   print("Account Created Successfully");
}
else{
   $pos = strrpos($conn->error, "PRIMARY");
   $pos2 = strrpos($conn->error, "Email");
   if($pos == true){
      print("This Username is taken \nPlease pick another Username");
   }
   else if($pos2 == true){
      print("This Email is taken \nPlease pick another Email");
   }
   else{
   print("Error: ".$conn->error);
   }
}

?>