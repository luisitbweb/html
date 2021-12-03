var jsonobj = '{"test" : "valeu1", "test2" : 3.44, "test3" : 0}';
var obj = JSON.parse(jsonobj, function(key, value){
    if(typeof value == 'number'){
        if(value == 0)
            value = false;
        else if (value == 1){
            value = true;
        }
    }
    return value;
});

alert(obj.test3); // prints false

function convertBoolToNums(key, value){
    if(typeof value == 'boolean'){
        if(value)
            value = 1;
        else
            value = 0;
    }
    return value;
};

window.onload=function(){
    var obj = '{"test" : "valeu1", "test2" : 3.44, "test3" : false}';
    var jsonobj = JSON.stringify(obj, convertBoolToNums, 3);
    
    alert(jsonobj); // test3 should be 0
}