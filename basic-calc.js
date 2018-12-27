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
    let xNum = Number(x);
    let yNum = Number(y);
    let result = operator(xNum, yNum);
    if(Math.round(result) == result){
        return result;
    }
    else{
        return round(result);
    }
}

function backspace(){
    display.textContent = display.textContent.slice(0, -1);
    displayVal = display.textContent;
}

function clearVals(){
    displayVal = 0;
    storedVal = 0;
    display.textContent = "";
    opChoice = null;
}

function equals(){
    if (!opChoice){
        display.textContent = displayVal;
    }
    else{
        displayVal = operate(opChoice, storedVal, displayVal);
        display.textContent = displayVal;
        opChoice = null;
    }
}
function round(num){
    return num.toFixed(9 - Math.round(Math.log10(num)))
}
const display = document.querySelector("#display");
const digits = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
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
    if (e.key >= 0 && e.key <=9){
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
    else if(e.key=="Backspace"){
        backspace();
    }
    else if(e.key=="c"){
        clearVals();
    }
    else if(e.key=="Enter" || e.key=="="){
        equals();
    }
    else if(e.key=="+"){
        opChoice = add;
    }
    else if(e.key=="-"){
        opChoice = subtract;
    }
    else if(e.key=="*"){
        opChoice = multiply;
    }
    else if(e.key=="/"){
        opChoice = divide;
    }
})

operators.forEach(operator => operator.addEventListener("click", function(e){
    if (opChoice != null){
        displayVal = operate(opChoice, storedVal, displayVal);
        display.textContent = displayVal;
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

equalsButton.addEventListener("click", equals);
clear.addEventListener("click", clearVals);
back.addEventListener("click", backspace);