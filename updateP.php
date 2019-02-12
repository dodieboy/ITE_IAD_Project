<?php
$UUsername = $_POST["username"];
$UName = $_POST["fullname"];
$UPassword = $_POST["password"];
$UEmail = $_POST["email"];
$UPhone = $_POST["phone"];
$UGender = $_POST["gender"];
$URole = $_POST["role"];

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
$sql = "UPDATE `user` SET `Name`='$UName',`Password`='$UPassword',`Email`='$UEmail',`Gender`='$UGender',`Phone`='$UPhone',`Role`='$URole' WHERE `Username` = '$UUsername'";

if ($conn->query($sql) == TRUE) {
   print("User Updated Successfully");
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