// GLOBAL VARIABLES
let firstNum = 0;
let operator = "";
let secondNum = 0;

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

