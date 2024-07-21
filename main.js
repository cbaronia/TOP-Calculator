// GLOBAL VARIABLES
let firstNum = 0;
let operator = '';

let displayValue = "0";
let firstNumSet = false;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){

    if(b === 0){
        return "ERROR: DIV BY ZERO";
    }

    return a / b;
}

function operate(a, b, op){
    let opResult = 0;
    switch(op){
        case '+':
            opResult = add(a,b);
            break;
        case '-':
            opResult = subtract(a,b);
            break;
        case '*':
            opResult = multiply(a,b);
            break;
        case '/':
            opResult = divide(a,b);
            break;
    }
    return opResult;
}

// Query Selectors
let myDisplay = document.querySelector(".display");
let numberBtns = document.querySelectorAll(".numbers > button");
let calcBtns = document.querySelectorAll(".calcButtons > button");
let equalBtn = document.querySelector(".equalBtn");
let clearBtn = document.querySelector(".clearBtn");

function updateDisplayValue_Number(btnValue){

    // First button was zero
    if(displayValue === "0" && btnValue === "0"){
        return;
    }
    else if(displayValue === "0" && btnValue !== "0"){
        displayValue = btnValue;
        myDisplay.textContent = displayValue;
        return;
    }

    // Push button's value onto displayValue
    displayValue += btnValue;

    myDisplay.textContent = displayValue;
}

// Event Listeners
numberBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        // Update the displayValue on screen
        updateDisplayValue_Number(btn.value);

    });
});

calcBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(!firstNumSet){
            firstNum = +displayValue;
            firstNumSet = true;
            displayValue = "";
        }
        operator = btn.value;
    });
});

equalBtn.addEventListener("click", () => {
    let calcResult = operate(firstNum, +displayValue, operator);
    displayValue = calcResult.toString();
    myDisplay.textContent = displayValue;
    firstNum = calcResult;
    displayValue = "";
});

clearBtn.addEventListener("click", () => {
    firstNum = 0;
    operator = '';
    displayValue = "0";
    firstNumSet = false;
    myDisplay.textContent = displayValue;
});