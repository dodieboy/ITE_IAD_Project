<?php
session_start();

// $_POST["YOUR TEXBOX NAME"] not ID
// do name="username" in your textbox like how you do your id
$UUsername = $_POST["username"];
$UPassword = $_POST["md5Password"];

$host = 'localhost';
$user = 'root';
$password = '';

// your database and table name
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
$sql = "SELECT * FROM $tb WHERE (Username = '$UUsername') & (Password = '$UPassword')";

//Pull data from SQL database
$result = mysqli_query($conn, $sql);

//check if  user is in databass and password match
   
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