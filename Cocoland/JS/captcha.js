/*
SPDX-Short-Identifier: MIT
(c) 2019 Alan Tan
This code is licensed under MIT license (See LICENSE.txt for details)
*/
document.addEventListener("DOMContentLoaded", function() {
    document.body.scrollTop;
    var timeout;
    var captcha = new $.Captcha({
        onFailure: function() {
            $(".captcha-chat .wrong").show({
                duration: 30,
                done: function() {
                    var that = this;
                    clearTimeout(timeout);
                    $(this).removeClass("shake");
                    $(this).css("animation");
                    $(this).addClass("shake");
                    var time = parseFloat($(this).css("animation-duration")) * 1000;
                    timeout = setTimeout(function() {
                        $(that).removeClass("shake");
                    }, time);
                }
            });
        },
        onSuccess: function() {
            $("#captchaCheck").val("1");
        }
    });
    captcha.generate();
});