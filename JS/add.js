$(document).ready(function() {
    $('#btnBack').click(function(event) {
        window.location = 'admin.html';
    });
    $("#create").on("submit", function(e) {
        e.preventDefault();
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
        });
    });
});