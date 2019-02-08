<?php

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
    else {
        //Connect to database
        mysqli_select_db($conn, $db);

        //Define a SQL Select statement
        $sql = "SELECT * FROM $tb";

        //Pull data from SQL database
        $result = mysqli_query($conn, $sql);

        //Parse data from each row of database
        print("<table align=center id='adminTable'><tr><th id='uName'>User Name</th><th id='fName'>Name</th><th id='password'>Password</th><th id='email'>Email</th><th id='gender'>Gender</th><th id='phone'>Phone</th><th id='role'>Role</th></tr>");
        while($data = mysqli_fetch_row($result)){
            print("<tr class='uData' title='Click to edit'>");
            print("<td id='uName'>".$data[0]."</td>");
            print("<td id='fName'>".$data[1]."</td>");
            print("<td id='password'>".$data[2]."</td>");
            print("<td id='email'>".$data[3]."</td>");
            print("<td id='gender'>".$data[4]."</td>");
            print("<td id='phone'>".$data[5]."</td>");
            print("<td id='role'>".$data[6]."</td>");
            //print("<td><input type='button' value='add'></td>");
            print("</tr>");
        }
        print("</table>");
    }

?>