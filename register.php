<?php
$UUsername = $_POST["username"];
$UPassword = $_POST["md5Password"];
$UName = $_POST["fullname"];
$UEmail = $_POST["email"];
$UPhone = $_POST["phone"];
$UGender = $_POST["gender"];

$host = 'localhost';
$user = 'root';
$password = '';
$db = 'iad_project';
$tb = 'user';


// Try to connect to phpmyadmin
$conn = mysqli_connect($host, $user, $password);

// Check for error when connecting
if(mysqli_connect_errno()){
   echo "Error! Connection Failed";
}
//Connect to database
mysqli_select_db($conn, $db);

//Define a SQL Select statement
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