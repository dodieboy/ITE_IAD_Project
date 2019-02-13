$(document).ready(function() {
    showTable();
    $('#btnRefresh').click(function(event) {
        showTable()
    });
    $('#btnAdd').click(function(event) {
        window.location = 'addUser.html';
    });
});

function showTable() {
    $.ajax({
        type: "POST",
        url: 'admin.php',
        dataType: 'json',
        success: function(data) {
            var tables = "<table align=center id='adminTable'><tr><th id='uName'>User Name</th><th id='fName'>Name</th><th id='password'>Password</th><th id='email'>Email</th><th id='gender'>Gender</th><th id='phone'>Phone</th><th id='role'>Role</th></tr>";
            var x = 0
            for (var i = 0; i < (data.length / 7); i++) {
                tables = tables + "<tr class='uData' title='Click to edit' onClick='getId(this)'>" + "<td id='uName' class='uName'>" + data[x] + "</td>" + "<td id='fName'>" + data[x + 1] + "</td>" + "<td id='password'>" + data[x + 2] + "</td>" + "<td id='email'>" + data[x + 3] + "</td>" + "<td id='gender'>" + data[x + 4] + "</td>" + "<td id='phone'>" + data[x + 5] + "</td>" + "<td id='role'>" + data[x + 6] + "</td></tr>"
                x += 7
            }
            tables = tables + "</table>"
            $('#table').html(tables);
        },
        error: function() {
            alert("error");
        }
    });
}

function test() {
    alert("test");
}

function getId(element) {
    var username = $('#adminTable').find('tr:eq(' + element.rowIndex + ')').children('td.uName').text();
    localStorage.setItem('userName', JSON.stringify(username));

    window.location = 'edit.html';
}