let result = 0;
let input = "0";

//Elements
const numpad = document.querySelectorAll(".numpad");
const displayInput = document.querySelector(".input");

//Button bindings

numpad.forEach(btn => btn.addEventListener("click", numberInput));

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, c) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(event) {
    let operator = event.target.value
}

function add(num1, num2) {
    return num1 + num2;
}

function clearAll(){
    result = 0;
    input = 0;
    updateDisplayInput();
}

function numberInput(event) {
    let number = event.target.value;
    if (input == "0") {
        input = number;
    }
    else {
        input += number;
    }
    updateDisplayInput();
}

function updateDisplayInput() {
    displayInput.textContent = input;
}


clearAll();