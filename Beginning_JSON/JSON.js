var xhr = new XMLHttpRequest();
xhr.onreadystatechange = handlStateChange;
addListener(xhr, 'loadstart', function () {
    alert("loadstart");
});
addListener(xhr, 'progress', function ()
{
    alert("progress");
});
addListener(xhr, 'load', function () {
    alert("load");
});
addListener(xhr, 'loadended', function ()
{
    alert("loadended");
});
addListener(xhr, 'timeout', function ()
{
    alert("timeout");
});
addListener(xhr, 'abort', function () {
    alert("abort");
});
addListener(xhr, 'readystatechange', function ()
{
    alert("readystatechange");
});

//cross browser addListener
function addListener(elem, eventName, handler) {
    if (elem) {
        elem.addEventListener(eventName, handler,
                false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + eventName, handler);
    } else {
        elem['on' + eventName] = handler;
    }
}

function handlStateChange() {
    if (xhr.readyState === 0) {
        alert("XHR is now instantiated!");
    } else if (xhr.readyState === 1) {
        alert("XHR is now Initialized!");
    } else if (xhr.readyState === 2) {
        alert("Headers are now Available!");
    } else if (xhr.readyState === 3) {
        alert("Receiving Data!");
    } else if (xhr.readyState === 4) {
        alert("HTTP Request ended!");
    }
}

var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://json.sandboxed.guru/chapter8/xss-post.php");
    shr.send("fname=ben&lname=smith");
    // content-type will be defaulted to text/plain;
    charset=UTF-8
    
    var person={name:"ben", gender:"male"};
    var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://json.sandboxed.guru/chapter8/xss-post.php");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(person));