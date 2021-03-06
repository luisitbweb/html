// Parse strings looking for color tuples [255,255,255]
// pulled from internal jQuery function
jQuery.bbGetRGB = function (color) {
    var result;
// Check if we're already dealing with an array of colors
    if (color && color.constructor == Array && color.length == 3)
        return color;
// Look for rgb(num,num,num)
    if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
        return [parseInt(result[1], 10), parseInt(result[2], 10),
            parseInt(result[3], 10)];
// Look for rgb(num%,num%,num%)
    if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
        return [parseFloat(result[1]) * 2.55, parseFloat(result[2]) *
                    2.55, parseFloat(result[3]) * 2.55];
// Look for #a0b1c2
    if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.
            exec(color))
        return [parseInt(result[1], 16), parseInt(result[2], 16),
            parseInt(result[3], 16)];
// Look for #fff
    if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.
            exec(color))
        return [parseInt(result[1] + result[1], 16), parseInt(result[2] + result[2], 16),
            parseInt(result[3] + result[3], 16)];
// Look for rgba(0, 0, 0, 0) == transparent in Safari 3
    if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
        return colors['transparent'];
// Otherwise, we're most likely dealing with a named color
    return colors[$.trim(color).toLowerCase()];
};
jQuery.bbPadHex = function (value) {
    if (value.toString().length == 1) {
        value = "0" + value;
    }
    return value;
};
jQuery.bbConvertRGBtoHex = function (rgbString) {
    var colors = $.bbGetRGB(rgbString);
    var red = $.bbPadHex(parseInt(colors[0]).toString(16));
    var green = $.bbPadHex(parseInt(colors[1]).toString(16));
    var blue = $.bbPadHex(parseInt(colors[2]).toString(16));
    return "#" + red + green + blue;
};

function sendData(evt) {
// cancel default form submittal
    evt = evt || window.event;
    evt.preventDefault();
    evt.returnValue = false;
// get input data
    var one = encodeURIComponent(document.getElementById("one").value);
    var two = encodeURIComponent(document.getElementById("two").value);
    var params = "one=" + one + "&two=" + two;
// prep request
    if (!http) {
        http = new XMLHttpRequest();
    }
    var url = "ajaxserver.php?" + params;
    http.open("GET", url, true)
// callback function
    http.onreadystatechange = processResult;
// make Ajax call with params
    http.send(null);
}