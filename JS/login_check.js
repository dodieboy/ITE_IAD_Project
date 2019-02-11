$(document).ready(function() {
    login_check();
});

function login_check() {
    $.ajax({
        type: "POST",
        url: 'loginCheck.php',
        dataType: 'json',
        success: function(data) {
            if (data[0].indexOf('fail') >= 0) {
                if ($(location).attr('pathname').indexOf('register.html') <= 0) {

                } else if ($(location).attr('pathname').indexOf('index.html') <= 0) {
                    window.location = 'index.html';
                }
            } else {
                $('.UName').html('Welcome ' + data[0]);
                if (data[1].indexOf('N') >= 0) {
                    if ($(location).attr('pathname').indexOf('admin.html') >= 0) {
                        window.location = 'store.html';
                    }
                }
                if ($(location).attr('pathname').indexOf('index.html') >= 0) {
                    window.location = 'store.html';
                } else if ($(location).attr('pathname').length == 16) {
                    window.location = 'store.html';
                } else if ($(location).attr('pathname').indexOf('register.html') >= 0) {
                    window.location = 'store.html';
                }
            }
        }
    });
}