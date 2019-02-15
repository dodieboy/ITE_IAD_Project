<?php
$host = 'sql203.epizy.com';
$user = 'epiz_23455877';
$password = 'ezTZxxtl4R';

$db = 'epiz_23455877_iad_project';
$conn = mysqli_connect($host, $user, $password);

if(mysqli_connect_errno()){
   echo "Error! Connection Failed";
}
mysqli_select_db($conn, $db);
?>