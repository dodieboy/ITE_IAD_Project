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
$sql = "SELECT * FROM $tb WHERE (Username = '$UUsername')";

//Pull data from SQL database
$result = mysqli_query($conn, $sql);

//check if  user is in databass and password match
$item = array();
for ($x = 0; $data = mysqli_fetch_array($result); $x++) {
    array_push($item,$data[0],$data[1],$data[2],$data[3],$data[4],$data[5],$data[6]);
}
echo json_encode($item);

?>