const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
const display = document.querySelector('.display')
const decimalPoint = document.querySelector('.decimal-point')
const equalsBtn = document.querySelector('.equals')
const allClearBtn = document.querySelector('.all-clear-btn')
const zeroBtn = document.querySelector('.zero')
const plusNegativeBtn = document.querySelector('.plus-negative-btn')

let firstInputNumber = '';
let secondInputNumber = '';
let operator = '';
let inOperation = false;
let hasDecimalPoint = false;

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
            hasDecimalPoint = false;
        }  else if (firstInputNumber !== '' && secondInputNumber !== '' && inOperation) {
            display.textContent = operate(Number(firstInputNumber), 
              Number(secondInputNumber), operator)
            firstInputNumber = display.textContent
            operator = e.target.textContent
            secondInputNumber = ''
            console.log(firstInputNumber, secondInputNumber)
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
   hasDecimalPoint = false;
  }
})

allClearBtn.addEventListener('click', () => {
   firstInputNumber = '';
   display.textContent = '0';
   secondInputNumber = '';
   operator = '';
   inOperation = false;
   hasDecimalPoint = false;
})

decimalPoint.addEventListener('click', () => {
    if(!hasDecimalPoint && firstInputNumber === '' && secondInputNumber === '') {
        firstInputNumber = '0.';
        display.textContent = firstInputNumber;
        hasDecimalPoint = true;
    } else if (!hasDecimalPoint && firstInputNumber !== '' && secondInputNumber === '' && inOperation) {
        secondInputNumber = '0.'
        display.textContent = secondInputNumber;
        hasDecimalPoint = true;
    } else if (!hasDecimalPoint && firstInputNumber.length > 0 && secondInputNumber === '') {
        firstInputNumber += '.'
        display.textContent = firstInputNumber;
        hasDecimalPoint = true;
    } else if (!hasDecimalPoint && firstInputNumber !== '' && secondInputNumber.length > 0 && inOperation) {
        secondInputNumber += '.'
        display.textContent = secondInputNumber; 
        hasDecimalPoint = true;
    }
})

zeroBtn.addEventListener('click', () => {
    if (hasDecimalPoint && !inOperation) {
        firstInputNumber += '0'
        display.textContent = firstInputNumber;
    } else if (hasDecimalPoint && inOperation) {
        secondInputNumber += '0'
        display.textContent = secondInputNumber; 
    } else if (!hasDecimalPoint && !inOperation && Number(firstInputNumber) !== 0 && firstInputNumber !== '') {
        firstInputNumber += '0'
        display.textContent = firstInputNumber;
    } else if (!hasDecimalPoint && inOperation && Number(secondInputNumber) !== 0 && secondInputNumber !== '') {
        secondInputNumber += '0'
        display.textContent = secondInputNumber; 
    }
})

plusNegativeBtn.addEventListener('click', () => {
    if (!inOperation && firstInputNumber !== 0) {
        firstInputNumber = -firstInputNumber
        display.textContent = firstInputNumber
    } else if (inOperation && firstInputNumber !== 0) {
        secondInputNumber = -secondInputNumber
        display.textContent = secondInputNumber
    }
})