<!--
SPDX-Short-Identifier: MIT
(c) 2019 Alan Tan
This code is licensed under MIT license (See LICENSE.txt for details)
-->
<?php
include 'main.php';
$tb = 'user';

$UUsername = $_POST["username"];

$sql = "SELECT * FROM $tb WHERE (Username = '$UUsername')";

$result = mysqli_query($conn, $sql);

$item = array();
for ($x = 0; $data = mysqli_fetch_array($result); $x++) {
    array_push($item,$data[0],$data[1],$data[2],$data[3],$data[4],$data[5],$data[6]);
}
echo json_encode($item);

?>