$(document).ready(function() {
    login_check();
    if ($(window).width() < 777) {
        cart_check('mobile');
    } else {
        cart_check();
    }
    $(".navIcon").click(function(event) {
        nav();
    });
});

$(window).resize(function() {
    if ($(window).width() < 985) {
        cart_check('mobile');
        $(".nav").hide();
        $(".header").height("auto");
        $(".header").css('background-color', '');
    } else {
        cart_check();
        $(".nav").show();
    }
})

function login_check() {
    $.ajax({
        type: "POST",
        url: 'loginCheck.php',
        dataType: 'json',
        success: function(data) {
            if (data[0].indexOf('fail') >= 0) {
                $('#navLogin').html('<a href="login.html">Login Now</a>');
                if (($(location).attr('pathname').indexOf('admin.html') >= 0) || ($(location).attr('pathname').indexOf('addUser.html') >= 0) || ($(location).attr('pathname').indexOf('edit.html') >= 0)) {
                    window.location = 'index.html';
                }
            } else {
                $('#navLogin').html('<a href="logout.php">Logout Now</a>');
                if (($(location).attr('pathname').indexOf('register.html') >= 0) || ($(location).attr('pathname').indexOf('login.html') >= 0)) {
                    window.location = 'index.html';
                }
                if (data[1].indexOf('N') >= 0) {
                    $('.UName').html('Welcome ' + data[0]);
                    if (($(location).attr('pathname').indexOf('admin.html') >= 0) || ($(location).attr('pathname').indexOf('addUser.html') >= 0) || ($(location).attr('pathname').indexOf('edit.html') >= 0)) {
                        window.location = 'index.html';
                    }
                } else if (data[1].indexOf('A') >= 0) {
                    $('.UName').html('Welcome ' + '<b><a href="admin.html" class="user" title="Go admin portal">' + data[0] + '</a></b>');
                }
            }
        }
    })
}

function cart_check(i) {
    if (i == "mobile") {
        $.ajax({
            type: "POST",
            url: 'cartCheck.php',
            success: function(data) {
                $("#navCart").html("Cart (" + data + ")");
            }
        })

    } else {
        $.ajax({
            type: "POST",
            url: 'cartCheck.php',
            success: function(data) {
                $("#navCart").html("Cart&#65077;" + data + "&#65078;");
            }
        })
    }
}

function nav() {
    if ($(".nav").is(":visible")) {
        $(".nav").hide();
        $(".header").height("auto");
        $(".header").css('background-color', '');
    } else {
        $(".nav").show();
        $(".header").height("100vh");
        $(".header").css('background-color', 'black');
    }
}