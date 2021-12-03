$(function () {
    $('.email-input').on('focus', function () {
        $('.blinker').fadeTo(300, 0.1).fadeTo(300, 1);
    });
});