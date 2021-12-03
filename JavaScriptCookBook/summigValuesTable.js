var str = 'checked values';
try {
    var checked = document.querySelectorAll("#checks input[type='checkbox']:checked");
    for (var i = 0; i < checked.length; i++) {
        str += checked[i].value + ' ';
    }
} catch (e) {
    var inputs = document.querySelectorAll()("#checks input");
    for (var j = 0; j < inputs.length; i++) {
        if (inputs.item(j).type == 'checkbox' && inputs.item(j).checked) {
            str += inputs.item(j).value + ' ';
        }
    }
}
document.getElementById('results').innerHTML = str;

function sum() {
    try {
        var cells = document.querySelectorAll('tr:nth-child(3) td');
    } catch (e) {
        var tableElement = document.getElementById('thetable');
        var trs = tableElement.getElementsByTagName('tr');
        var cells = trs[2].getElementsByName('td');
    }
// process cell data
    var sum = 0;
    for (var i = 0; i < cells.length; i++) {
        var val = parseFloat(cells[i].firstChild.data);
        if (!isNaN(val)) {
            sum += val;
        }
    }
// output the sum
    alert('sum ' + sum);
}

var style;
var cssprop = 'fontFamily';
var cssprop2 = 'font-family';
if (elem.currentStyle) {
    style = elem.currentStyle[cssprop];
} else if (document.defaulView && document.defaultView.getComputedStyle) {
    style = document.defaulView.getComputedStyle(elem, null).getPropertyValue(cssprop2);
}

//get the existing element
var refElement = document.getElementById('sister');

// get the element's parent node
var parent = refElement.parentNode;

// create new div element
var newDiv = document.createElement('div');

// attach to page before sister element
parent.insertBefore(newDiv, refElement);