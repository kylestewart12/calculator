function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

function operate(operator, x, y){
    return operator(x, y);
}

const display = document.querySelector("#display");
const digits = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const back = document.querySelector("#backspace");

let storedVal = 0;
let displayVal = 0;
let opChoice = null;


digits.forEach(digit => digit.addEventListener("click", function(e){

    display.textContent += e.target.textContent;

    if(display.textContent==""){
        displayVal = 0;
    }

    else{
       displayVal = Number(display.textContent);
    }
}));

document.addEventListener("keydown", function(e){
    console.log(e.which);
    if (e.which >= 48 && e.which <=57){
        const num = String.fromCharCode(e.which);

        const key = document.querySelector(`#num${num}`);
        display.textContent += key.textContent;
        if(display.textContent==""){
            displayVal = 0;
        }

        else{
        displayVal = Number(display.textContent);
        }
    }
})

operators.forEach(operator => operator.addEventListener("click", function(e){
    if (opChoice != null){
        displayVal = operate(opChoice, storedVal, displayVal);
        display.textContent = displayVal;
        opChoice = null;
    }
    switch(e.target.id){
        case "add":
            opChoice = add;
            break;
        case "subtract":
            opChoice = subtract;
            break;
        case "multiply":
            opChoice = multiply;
            break;
        case "divide":
            opChoice = divide;
            break;
    }
    storedVal = displayVal;
    display.textContent = "";
    displayVal = 0;
}))

equals.addEventListener("click", function(e){
    if (!opChoice){
        display.textContent = Number(displayVal);
    }
    else{
        displayVal = operate(opChoice, storedVal, displayVal);
        display.textContent = displayVal;
        opChoice = null;
    }
})

clear.addEventListener("click", function(e){
    displayVal = 0;
    storedVal = 0;
    display.textContent = "";
    opChoice = null;
})

back.addEventListener("click", function(){
    display.textContent = display.textContent.slice(0, -1);
})