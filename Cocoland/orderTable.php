<?php
//SPDX-Short-Identifier: MIT
//(c) 2021 Alan Tan
//This code is licensed under MIT license (See LICENSE.txt for details)
include 'main.php';
$tb = 'orders';

$sql = "SELECT * FROM $tb";

$result = mysqli_query($conn, $sql);

$item = array();
for ($x = 0; $data = mysqli_fetch_array($result); $x++) {
    array_push($item,$data[0],$data[1],$data[2],$data[3],$data[4],$data[5]);
}
echo json_encode($item);

?>