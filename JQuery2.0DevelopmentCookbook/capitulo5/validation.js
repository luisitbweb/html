$(function () {
    $('input').on("keyup", function(){
       dovalidation($(this)) ;
    });
    $('.submit-btn').click(function (event) {
        //Prevent form submission
        event.preventDefault();
        var inputs = $('input');
        var isError = false;

        //Remove old errors
        $('.input-frame').removeClass('error');
        $('.error-data').remove();
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            doValidation(input);
            if ($(input).hasClass('required') && !validateRequired($(input).val())) {
                addErrorData($(input), "This is a required field!");
                isError = true;
            }
            // validate Number
            if($(input).hasClass('number') && !validateNumber($(input). val())){
                addErrorData($(input), "This field can only contain numbers!");
                isError = true;
            }
            // Validate Data
            if($(input).hasClass('date') && !validateData($(input).val())){
                addErrorData($(input), "Invalid date provided!");
                isError = true;
            }
            // Validate CreditCard
            if($(input).hasClass('credit-card') && !validateCreditCard($(input).val())){
                addErrorData($(input), "Invalid credit card number!");
                isError = true;
            }
            // Validate Email
            if($(input).hasClass('email') && !validateEmail($($(input)) .val())){
                addErrorData($(input), "Invalid email addres provided");
                isError = true;
            }
        }
        if ($('.error-data').length == 0) {
            // No errors, submit the form
            $('#webForm').submit();
        }
    });
});

function validateRequired(value) {
    if (value == "")
        return false;
    return true;
}

// Code for this recipe 
function validateNumber(value){
    if(value != ""){
        return !isNaN(parseInt(value, 10)) && isFinite(value);
        // isFinite, in case letter is on the end
    }
    return true;
}

function validateDate(value){
    if(value != ""){
        if(/^\d{2}([.\/-])\d{2}\1\d{4}$/.test(value)){
            // Remove leading zeros
            value = value.replace(/0*(\d*)/gi,"$1");
            var dateValues = value.split(/[\.|\/|-]/);
            // Correct the month value as month index starts at 0 now 1 (e.g. 0 = Jan, 1 = Feb)
            dateValues[1]--;
            var date = new Date(dateValues[2], dateValues[1], dateValues[0]);
            if(date.getDate() == dateValues[0] && date.getMonth() == dateValues[1] 
                    && date.getFullYear() == dateValues[2]){
                return true;
            }
        }
        return false;
    }else{
        return true;
    }
}

function validateCreditCard(value){
    if(value != ""){
        return /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(value);
    }
    return true;
}

function addErrorData(element, error) {
    element.parent().addClass("error");
    element.after("<div class='error-data'>" + error + "</div>");
}

function validateEmail(value){
    if(value != ""){
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(value);
    }
    return true;
}

function doValidation(input){
    // Remove old errors
    $(input).parent().removeClass('error');
    $(input).next('.error-data').remove();
    if($(input).hasClass('required') && !validateRequired($(input).val())){
        addErrorData($(input), "This is a required field");
    }
    if($(input).hasClass('email') && !validateEmail($($(input)).val())){
        addErrorData($(input), "Invalid email address provided");
    }
    if($(input).hasClass('number') && !validateNumber($(input).val())){
        addErrorData($(input), "This field can only contain numbers");
    }
    if($(input).hasClass('date') && !validateDate($(input).val())){
        addErrorData($(input), "Invalid date provided");
    }
    if($(input).hasClass('credit-card') && !validateCreditCard($(input).val())){
        addErrorData($(input), "Invalid credit card number");
    }
}