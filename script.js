const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
const display = document.querySelector('.display')
const decimalPoint = document.querySelector('.decimal-point')
const equalsBtn = document.querySelector('.equals')
const allClearBtn = document.querySelector('.all-clear-btn')

let firstInputNumber = '';
let secondInputNumber = '';
let operator = '';
let inOperation = false;

const add = (a, b) => { return a + b }
const subtract = (a, b) => { return a - b }
const multiply = (a, b) => { return a * b }
const divide = (a, b) => { return a / b }

const operate = (input1, input2, operator) => {

    if (operator === '+') {
       return add(input1, input2)
       
    } else if (operator === '-') {
       return subtract(input1, input2)
        
    } else if (operator === 'x') {
       return multiply(input1, input2)
        
    } else if (operator === '÷') {
       return divide(input1, input2)
        
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
        if (!inOperation && firstInputNumber !== '') {
            inOperation = true;
            operator = e.target.textContent
        }  
    })
})

equalsBtn.addEventListener('click', () => {
   if (inOperation === true 
      && firstInputNumber !== '' 
      && secondInputNumber !== '') {
          display.textContent = operate(Number(firstInputNumber), 
              Number(secondInputNumber), operator)
          operator = ''
          firstInputNumber = ''
          secondInputNumber = ''
      inOperation = false;
  }
})

allClearBtn.addEventListener('click', () => {
   firstInputNumber = ''
   display.textContent = firstInputNumber
   secondInputNumber = ''
   operator = ''
   inOperation = false
})