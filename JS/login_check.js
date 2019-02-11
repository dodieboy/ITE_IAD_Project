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
                if ($(location).attr('pathname').indexOf('register.html') >= 0) {} else if ($(location).attr('pathname').indexOf('index.html') >= 0) {} else if (location.pathname == '/IAD-Project/') {} else {
                    window.location = 'index.html';
                }
            } else {
                if (data[1].indexOf('N') >= 0) {
                    $('.UName').html('Welcome ' + data[0]);
                    if ($(location).attr('pathname').indexOf('admin.html') >= 0) {
                        window.location = 'store.html';
                    } else if ($(location).attr('pathname').indexOf('edit.html') >= 0) {
                        window.location = 'store.html';
                    }
                } else if (data[1].indexOf('A') >= 0) {
                    $('.UName').html('Welcome ' + '<b><a href="admin.html" class="user" title="Go admin portal">' + data[0] + '</a></b>');
                }
                if ($(location).attr('pathname').indexOf('index.html') >= 0) {
                    window.location = 'store.html';
                } else if (location.pathname == '/IAD-Project/') {
                    window.location = 'store.html';
                } else if ($(location).attr('pathname').indexOf('register.html') >= 0) {
                    window.location = 'store.html';
                }
            }
        }
    });
}