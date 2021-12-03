/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $('#slide').click(function () {
        $('.slideMe').slideToggle(1000, function () {
            $('.output').append("<li>Slide effect completed.</li>");
        });
    });
    $('#stop').click(function () {
        $('.slideMe').stop();
    });
    $('#finish').click(function () {
        $('.slideMe').finish();
    });
});