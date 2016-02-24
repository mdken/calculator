function add(a, b){
    return a + b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function subtract(a, b){
    return (a - b);
};

$(function(){
    var current = "0";
    var first = 0;
    var op = null;
    
    $('[class^=num], [class^=calc]').click(function(){
        var button = $(this).attr("class").split("_");
        var type = button[0];
        button = button[button.length - 1];
        if (type == "num"){
            if (current == "0"){
                current = button;
            } else {
                current += button;
            }
        } else {
            if (button == "equal"){
                switch(op) {
                    case "add":
                        current = String(add(Number(current), first));
                        break;
                    case "subtract":
                        current = String(subtract(first,  Number(current)));
                        break;
                    case "multiply":
                        current = String(multiply(Number(current), first));
                        break;
                    case "divide":
                        current = String(divide(first, Number(current)));
                        break;
                }
            } else if(button == "clear") {
                current = "0";
                first = 0;
                op = null;
            } else {
                first = Number(current);
                op = button;
                current = "0";
            }
        }
        $('#result').html(current);
    });
});