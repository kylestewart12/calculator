const display = document.querySelector("input");
display.value = "";
function updateDisplay(char){
    if(display.value.length>=9){
        display.value = "OVERFLOW ";
        
    }
    else{
        display.value += char;
    }
}

function equals(){
    display.value = eval(display.value);
}

function clear(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

const buttons = document.querySelectorAll(".expression");
buttons.forEach(button => button.addEventListener("click", function(e){
    updateDisplay(e.target.textContent);
}))

const equalsButton = document.querySelector("#equals")
equalsButton.addEventListener("click", equals);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear);

const backButton = document.querySelector("#backspace");
backButton.addEventListener("click", backspace);
