<?php
$UUsername = $_POST["username"];

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
$sql = "DELETE FROM `user` WHERE `Username` = '$UUsername'";

if ($conn->query($sql) == TRUE) {
   print("User Deleted Successfully");
}
else{
    print("Error!!!");
}
?>