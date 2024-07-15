// GLOBAL VARIABLES
let firstNum = 9;
let operator = '/';
let secondNum = 2;

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