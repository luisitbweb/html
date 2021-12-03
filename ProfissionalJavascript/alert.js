/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function sayScript() {
    "use strict";
    alert('<\/script>');
}
function compare(a, b) {
    if (a < b) {
        alerta('A e menor que B');
    } else if (a > b) {
        alerta('A e maior que b');
    } else {
        alerta('A e igual a B');
    }
}
function igual() {
    alert(null === undefined);
}
function nan() {
    alert(isNaN(NaN === NaN));
}
function parInt() {
    var num1 = parseInt('1234blue');
    var num2 = parseInt('');
    var num3 = parseInt('0xA');
    var num4 = parseInt('22.5');
    var num5 = parseInt('70');
    var num6 = parseInt('0xf');
}
function parFlot() {
    var num1 = parseFloat('1234blue');
    var num2 = parseFloat('0xA');
    var num3 = parseFloat('22.5');
    var num4 = parseFloat('22.35.4');
    var num5 = parseFloat('0908.5');
    var num6 = parseFloat('3.125e7');
}
function tostr() {
    var num = 10;
    alert(num.toString());
    alert(num.toString(2));
    alert(num.toString(8));
    alert(num.toString(10));
    alert(num.toString(16));
}
function str() {
    var value1 = 10;
    var value2 = true;
    var value3 = null;
    var value4;
    alert(String(value1));
    alert(String(value2));
    alert(String(value3));
    alert(String(value4));
}
function unary() {
    var s1 = '01';
    var s2 = '1.1';
    var s3 = 'z';
    var b = false;
    var f = 1.1;
    var o = {
        valueof: function () {
            return -1;
        }
    };
    s1 = +s1; //value becomes numeric 1
    s2 = +s2; //value becomes numeric 1.1
    s3 = +s3; //value becomes NaN
    b = +b; //value becomes numeric 0
    f = +f; //no change, still 1.1
    o = +o; //value becomes numeric -1
}
function se() {
    var i;

    if (i > 25) {
        alet('Maior que 25.');
    } else {
        alet('Menor que ou igual 25.');
    }
}
function senao() {
    var i;

    if (i > 25) {
        alert('Maior que 25.');
    } else if (i < 0) {
        alert('Menor que 0.');
    } else {
        alert('Entre 0 e 25, inclusivo.');
    }
}
function fazerenquanto() {
    var i = 0;

    do {
        i += 2;
        alert('ainda menor.');
    } while (i < 10)
    {
        i++;
    }
}
function enquanto() {
    var i = 3;

    while (i < 10) {
        i += 2;
    }
    alert('ainda valida expressao.' + i);
}
function para() {
    var count = 10;

    start: for (var i = 1; i < count; i++) {
        alert(i);
    }
}
function paraem() {
    for (var propName in window) {
        document.writeln(propName);
    }
}
function parada() {
    var num = 0;

    for (var i = 1; i < 10; i++) {
        if (i % 5 === 0) {
            //break;
            continue;
        }
        num++;
    }
    alert(num);
}
function label() {
    var num = 0;

    outermost: for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i == 5 && j == 5) {
                //break outermost;
                continue outermost;
            }
            num++;
        }
    }
    alert(num);
}
function com() {
    with (location) {
        var qs = search.substring(1);
        var hostName = hostname;
        var url = href;
    }
}
function desvio() {
    var i;

    switch (i) { // ('hello world') como condicao
        case 25:
            alert('25');
            break;
        case 35:
            alert('35');
            break;
        case 45:
            alert('45');
            break;
        default:
            alert('Outro');
    }
}