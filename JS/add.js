$(document).ready(function() {
    $("#btnCreate").on("click", function(e) {
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
                var output = data;
                alert(output);
                if (data.indexOf('Successfully') >= 0) {
                    window.location = 'admin.html';
                } else {
                    $('#password').val("");
                }
            }
        });
    });
});