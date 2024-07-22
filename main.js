// GLOBAL VARIABLES
let firstNum = null;
let secondNum = null;
let operator = '';

let lastBtnPressed = null;

let displayValue = "0";

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
        alert("Dont Divide by Zero");
        firstNum = null;
        secondNum = null;
        operator = '';
        displayValue = "0";
        myDisplay.textContent = displayValue;
        lastBtnPressed = "clear";
        return;
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
let numberBtns = document.querySelectorAll(".number");
let calcBtns = document.querySelectorAll(".operation");
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

    if(lastBtnPressed == "op" || lastBtnPressed == "equal"){
        displayValue = "";
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

        lastBtnPressed = "num";

    });
});

calcBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(firstNum === null){
            firstNum = +displayValue;
        }
        else if(firstNum !== null && lastBtnPressed === "num"){
            let calcResult = operate(firstNum, +displayValue, operator);
            // If int
            if(calcResult % 1 !== 0){
                displayValue = parseFloat(calcResult.toString()).toFixed(8);
            }
            else{
                displayValue = calcResult.toString();
            }
            myDisplay.textContent = displayValue;
            firstNum = calcResult;
        }
        operator = btn.value;
        lastBtnPressed = "op";
    });
});

equalBtn.addEventListener("click", () => {
    if(firstNum !== null && operator !== '' && lastBtnPressed === "num"){
        let calcResult = operate(firstNum, +displayValue, operator);
        // If int
        if(calcResult % 1 !== 0){
            displayValue = parseFloat(calcResult.toString()).toFixed(8);
        }
        else{
            displayValue = calcResult.toString();
        }
        myDisplay.textContent = displayValue;
        firstNum = calcResult;
        operator = '';
    }
    lastBtnPressed = "equal";
});

clearBtn.addEventListener("click", () => {
    firstNum = null;
    secondNum = null;
    operator = '';
    displayValue = "0";
    myDisplay.textContent = displayValue;
    lastBtnPressed = "clear";
});