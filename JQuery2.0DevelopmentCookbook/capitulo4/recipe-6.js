/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $('#start').click(function () {
        $('.box').fadeOut().fadeIn().slideUp().slideDown().fadeTo(1000, 0.1).fadeTo(1000, 1);
    });
});