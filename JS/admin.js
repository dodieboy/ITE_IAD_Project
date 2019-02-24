$(document).ready(function() {
    if ($(location).attr('pathname').indexOf('admin.html') >= 0) {
        showTable();
    } else if ($(location).attr('pathname').indexOf('edit.html') >= 0) {
        var userName = JSON.parse(localStorage.getItem('userName'));
        loadUser(userName);
    }
    $('#btnRefresh').click(function(event) {
        showTable()
    })
    $('#btnAdd').click(function(event) {
        window.location = 'addUser.html';
    })
    $('#btnBack').click(function(event) {
        window.location = 'admin.html';
    })
    $('#edit').on("submit", function(e) {
        e.preventDefault();
        update();
    })
    $('#btnDelete').click(function(event) {
        UDelete();
    })
    $("#create").on("submit", function(e) {
        e.preventDefault();
        create();
    })
})

var uPassword;

function showTable() {
    $.ajax({
        type: "POST",
        url: 'admin.php',
        dataType: 'json',
        success: function(data) {
            var tables = "<table align=center id='adminTable'><tr><th>User Name</th><th>Name</th><th id='password'>Password</th><th>Email</th><th id='gender'>Gender</th><th id='phone'>Phone</th><th>Role</th></tr>";
            var x = 0
            for (var i = 0; i < (data.length / 7); i++) {
                tables += "<tr class='uData' title='Click to edit' onClick='getId(this)'><td class='uName'>" + data[x] + "</td><td>" + data[x + 1] + "</td><td id='password'>" + data[x + 2] + "</td><td>" + data[x + 3] + "</td><td id='gender'>" + data[x + 4] + "</td><td id='phone'>" + data[x + 5] + "</td><td>" + data[x + 6] + "</td></tr>"
                x += 7
            }
            tables += "</table>"
            $('#table').html(tables);
        },
        error: function() {
            alert("error");
        }
    })
}

function getId(element) {
    var username = $('#adminTable').find('tr:eq(' + element.rowIndex + ')').children('td.uName').text();
    localStorage.setItem('userName', JSON.stringify(username));
    window.location = 'edit.html';
}

function create() {
    var tempPass = $.md5($('#password').val());
    $.ajax({
        type: "POST",
        url: 'addUser.php',
        data: {
            username: $('#username').val(),
            fullname: $('#fullname').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            gender: $("input[name='gender']:checked").val(),
            role: $("input[name='role']:checked").val(),
            Password: tempPass
        },
        success: function(data) {
            alert(data);
            if (data.indexOf('Successfully') >= 0) {
                window.location = 'admin.html';
            } else {
                $('#password').val("");
            }
        }
    })
}

function loadUser(uName) {
    $.ajax({
        type: "POST",
        url: 'userSearch.php',
        data: { username: uName },
        dataType: 'json',
        success: function(data) {
            $('#username').val(data[0]);
            $('#fullname').val(data[1]);
            $('#password').val(data[2]);
            uPassword = data[2];
            $('#email').val(data[3]);
            if (data[4] == "M") {
                $("input[name='gender'][id='Male']").prop('checked', true);
            } else if (data[4] == "F") {
                $("input[name='gender'][id='Female']").prop('checked', true);
            } else {
                alert("ERROR\nNo gender is found");
            }
            $('#phone').val(data[5]);
            if (data[6] == "A") {
                $("input[name='role'][id='Admin']").prop('checked', true);
            } else if (data[6] == "N") {
                $("input[name='role'][id='Normal']").prop('checked', true);
            } else {
                alert("ERROR\nNo role is found");
            }
        }
    })
}

function update() {
    if ($('#password').val() == uPassword) {
        $.ajax({
            type: "POST",
            url: 'updateNP.php',
            data: {
                username: $('#username').val(),
                fullname: $('#fullname').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                gender: $("input[name='gender']:checked").val(),
                role: $("input[name='role']:checked").val()
            },
            success: function(data) {
                alert(data);
                if (data.indexOf('Successfully') >= 0) {
                    window.location = 'admin.html';
                }
            }
        })
    } else {
        var tempPass = $.md5($('#password').val());
        $.ajax({
            type: "POST",
            url: 'updateP.php',
            data: {
                username: $('#username').val(),
                password: tempPass,
                fullname: $('#fullname').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                gender: $("input[name='gender']:checked").val(),
                role: $("input[name='role']:checked").val()
            },
            success: function(data) {
                alert(data);
                if (data.indexOf('Successfully') >= 0) {
                    window.location = 'admin.html';
                }
            }
        })
    }
}

function UDelete() {
    $.ajax({
        type: "POST",
        url: 'deleteUser.php',
        data: {
            username: $('#username').val()
        },
        success: function(data) {
            alert(data);
            if (data.indexOf('Successfully') >= 0) {
                window.location = 'admin.html';
            }
        }
    })
}