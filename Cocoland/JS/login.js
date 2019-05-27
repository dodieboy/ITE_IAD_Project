/*
SPDX-Short-Identifier: MIT
(c) 2019 Alan Tan
This code is licensed under MIT license (See LICENSE.txt for details)
*/
$(document).ready(function() {
    $("#login").on("submit", function(e) {
        e.preventDefault();
        var tempPass = $.md5($('#password').val());
        $.ajax({
            type: "POST",
            url: 'login.php',
            data: $(this).serialize() + "&md5Password=" + tempPass,
            success: function(data) {
                $('#result').html(data);
                $('#result').show();
                if (data.indexOf('Success') >= 0) {
                    roleCheck();
                } else {
                    $('#password').val("");
                }
            }
        })
    })
    $("#register").on("submit", function(e) {
        e.preventDefault();
        var tempPass = $.md5($('#password').val());
        $.ajax({
            type: "POST",
            url: 'register.php',
            data: $(this).serialize() + "&md5Password=" + tempPass,
            success: function(data) {
                alert(data);
                if (data.indexOf('Successfully') >= 0) {
                    window.location = 'login.html';
                } else {
                    $('#password').val("");
                }
            }
        })
    })
})

function roleCheck() {
    $.ajax({
        type: "POST",
        url: 'loginCheck.php',
        dataType: 'json',
        success: function(data) {
            if (data[1] == "A") {
                window.location = 'admin.html';
            } else {
                window.location = 'index.html';
            }
        }
    })
}