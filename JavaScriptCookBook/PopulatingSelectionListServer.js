
// Capture the change event for the trigger form element:
document.getElementById("nicething").onchange=populateSelect;

// In the event handler function, make an Ajax call with the form data:
var url = "nicething.php?nicething=" + value;
xmlhttp.open('GET', url, true);
xmlhttp.onreadystatechange = getThings;
xmlhttp.send(null);

// In the Ajax result function, populate the selection list:
if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
    var select = document.getElementById("nicestuff");
    select.length=0;
    var nicethings = xmlhttp.responseText.split(",");
    for(var i = 0; i < nicethings.length; i++){
        select.options[select.length] = new Option(nicethings[i], nicethings[i]);
    }
    select.style.display = "block";
}else if(xmlhttp.readyState == 4 && xmlhttp.status != 200){
    document.getElementById("nicestuff").innerHTML = 'Error: Search Failed!';
}

