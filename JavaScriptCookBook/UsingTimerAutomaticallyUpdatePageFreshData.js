var url = "updatredtextfile.txt";
xmlhttp.open("GET", url, true);
cmlhttp.onreadystatechange = updateList;
xmlhttp.send(null);

// process return
function processResponse(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        var li = document.createElement("li");
        var txt = document.createTextNode(xmlhttp.responseText);
        li.appendChild(txt);
        document.getElementById("update").appendChild(li);
    }else if(xmlhttp.readyState == 4 && xmlhttp.status != 200){
        alert(xmlhttp.responseText);
    }
}

// timer
function startTimer(){
    populateList();
    timer = setTimeout(timerEvent, 15000);
}

function timerEvent(){
    if(xmlhttp.readyState == 4){
        populateList();
    }
    timer = setTimeout(timerEvent, 15000);
}

function stopTimer(){
    clearTimeout(timer);
}