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
    case '+':
        add((input1), input2)
        break;
    case '-':
        subtract(input1, input2)
        break;
    case 'x':
        multiply(input1, input2)
        break;
    case '÷':
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
    button.addEventListener('click', (e) => {
        console.log(e.target.textContent)
        
        if (!inOperation && firstInputNumber !== '') {
            inOperation = true;
            operator = e.target.textContent
        } else if (inOperation === true 
            && firstInputNumber !== '' 
            && secondInputNumber !== ''
            && e.target.textContent === '=') {
                display.textContent = add(Number(firstInputNumber), 
                    Number(secondInputNumber))
                operator = ''
                firstInputNumber = ''
                secondInputNumber = ''
            inOperation = false;
        }
        console.log(inOperation, operator)
    })
})
