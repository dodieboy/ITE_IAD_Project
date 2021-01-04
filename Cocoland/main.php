<?php
//SPDX-Short-Identifier: MIT
//(c) 2021 Alan Tan
//This code is licensed under MIT license (See LICENSE.txt for details)
$host = 'localhost';
$user = 'root';
$password = '';

$db = 'iad_project';

$conn = mysqli_connect($host, $user, $password);

if(mysqli_connect_errno()){
   echo "Error! Connection Failed; login failed";
}
mysqli_select_db($conn, $db);
?>
