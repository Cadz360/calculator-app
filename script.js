const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
const display = document.querySelector('.display')
const decimalPoint = document.querySelector('.decimal-point')

let firstInputNumber = '';
let secondInputNumber = '';
let operator = '';
let inOperation = false;

const add = (a, b) => { return a + b }
const subtract = (a, b) => { return a - b }
const multiply = (a, b) => { return a * b }
const divide = (a, b) => { return a / b }

const operate = (input1, input2, operator) => {
    switch (operator){
    case 'add':
        add(input1, input2)
        break;
    case 'subtract':
        subtract(input1, input2)
        break;
    case 'multiply':
        multiply(input1, input2)
        break;
    case 'add':
        multiply(input1, input2)
        break;
    }
}

operands.forEach(button => {
    button.addEventListener('click', () => {
        if (!inOperation) {
            firstInputNumber += button.textContent
        display.textContent = firstInputNumber
        } else {
            secondInputNumber += button.textContent
            display.textContent = secondInputNumber
        }
    })
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        if (!inOperation) {
            inOperation = true;
        }
    })
})
