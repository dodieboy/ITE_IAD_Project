$(document).ready(function() {
    var userName = JSON.parse(localStorage.getItem('userName'));
    loadUser(userName);
    $('#btnBack').click(function(event) {
        window.location = 'admin.html';
    });
});

function loadUser(uName) {
    $.ajax({
        type: "POST",
        url: 'userSearch.php',
        data: "username=" + uName,
        dataType: 'json',
        success: function(data) {
            $('#username').val(data[0]);
            $('#fullname').val(data[1]);
            $('#password').val(data[2]);
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
    });
}