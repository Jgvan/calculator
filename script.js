let result = "";
let input = "0";
let currentOperator = "";
let nextOperator = "";
// let shouldOperate = false;
let isNewNumbedAdded = false;


//Elements
const numpad = document.querySelectorAll(".numpad");
const displayInput = document.querySelector(".input");
const displayResult = document.querySelector(".result");
const operators = document.querySelectorAll(".operator");

//Button bindings

numpad.forEach(btn => btn.addEventListener("click", numberInput));
operators.forEach(operator => operator.addEventListener("click", operate));

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) killCalculator();
    return a / b;
}

function operate(event) {
    let triggerOperator = event.target.value;
    console.log(input);
    console.log(parseFloat);
    if ((!isNewNumbedAdded && result === "") || (triggerOperator === "=" && currentOperator === "")) {
        //shouldOperate = true;
        // nextOperator = triggerOperator;
        return;
    }
    else if(isNewNumbedAdded && result === ""){
        result = parseInt(input);
        updateDisplayResult(triggerOperator);
        currentOperator = triggerOperator;
        isNewNumbedAdded = false;
        return;
    }
    else if (!isNewNumbedAdded) {
        updateDisplayResult(triggerOperator);
        currentOperator = triggerOperator;
        return;
    }

    switch (currentOperator) {
        case "+":
            result = add(result, parseFloat(input));
            break;
        case "-":
            result = subtract(result, parseFloat(input));
            break;
        case "x":
            result = multiply(result, parseFloat(input));
            break;
        case "/":
            result = divide(result, parseFloat(input));
            break;
        case "":
            result = parseFloat(input);
            break;
        default:
            alert("Looks like something broke");
    }
    isNewNumbedAdded = false;
    // updateDisplayResult(currentOperator);
    nextOperator = (triggerOperator === "=") ? "" : triggerOperator;
    updateDisplayResult(nextOperator);
    // nextOperator = triggerOperator
    currentOperator = nextOperator;
}

function clearAll() {
    //result = 0;
    //lastOperator = "";


    result = "";
    input = "0";
    currentOperator = "";
    nextOperator = "";
    isNewNumbedAdded = false;

    displayResult.textContent = "";
    clearInput();
}

function clearInput() {
    input = "0";
    updateDisplayInput();
}

function updateDisplayResult(operator) {
    if (operator === "undefined" || operator === "") {
        displayResult.textContent = result;
        displayInput.textContent = result;
    }
    else {
        displayResult.textContent = `${result} ${operator}`;
    }
}

function updateDisplayInput() {
    displayInput.textContent = input;

    if (input === "8008135") {
        setTimeout(() => {
            alert("Grow up!");
        }, 10);
    }
}

function numberInput(event) {
    let number = event.target.value;
    if (input === "0" || !isNewNumbedAdded) {
        input = number;
        isNewNumbedAdded = true;
    }
    else if (number === "." && input.includes(".")) {
        return;
    }
    else {
        input += number;
    }
    updateDisplayInput();
}

function backspace() {
    input = input.substring(0, input.length - 1);
    if (input === "" || input === "-") input = "0";
    updateDisplayInput();
}

function togglePlusMinus() {
    if (input.includes("-")) {
        input = input.substring(1, input.length);
    }
    else if (input === "0") {
        return;
    }
    else {
        input = "-" + input;
    }
    updateDisplayInput();
}

function killCalculator(){
    const div = document.querySelector("body");
    div.innerHTML = "";
    div.setAttribute("style", "background: black; color: white; height: 100%; width: 100%; text-align: center; margin-top: 50vh; font-size: 20px;");
    div.textContent = "You attempted to divide by zero so we had to shut down the calculator to save the universe. Please reload the page to try again";
}

clearAll();