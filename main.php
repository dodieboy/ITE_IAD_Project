<?php
$host = 'localhost';
$user = 'root';
$password = '';

$db = 'iad_project';
$conn = mysqli_connect($host, $user, $password);

if(mysqli_connect_errno()){
   echo "Error! Connection Failed";
}
mysqli_select_db($conn, $db);
?>