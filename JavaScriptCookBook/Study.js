var BBTest = {
    concatWithSpace: function (string1, string2) {
        return string1 + ' ' + string2;
    },
    discoverNumber: function (string, number) {
        return string.indexOf(number);
    },
    divideNumbers: function (value1, value2) {
        return value1 / value2;
    },
    addAndRound: function (value1, value2) {
        return Math.round(value1 + value2);
    }
};

JQuery.fn.increaseWidth = function () {
    return this.each(function () {
        var width = $(this).width() + 10;
        $(this).width(width);
    });
};

/*use the following anonymous function syntax:*/

;
(function ($) {
    $.fn.flashBlueRed = function () {
        return this.each(function () {
            var hex = rgb2hex($(this).css("background-color"));
            if (hex == "#0000ff") {
                $(this).css("background-color", "#ff0000");
            } else {
                $(this).css("background-color", "#0000ff");
            }
        });
    };
})(jQuery);