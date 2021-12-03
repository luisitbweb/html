/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $("input").focus();
    $('#add-new-item').click(function () {
        var item = $('#new-item').val();
        if (item.length > 0) {
            var newItem = $("<li>" + item + "</li>").fadeIn();
            $('.list').append(newItem);
            $('#new-item').val("");
        }
    });
});