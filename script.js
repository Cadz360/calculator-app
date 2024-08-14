const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
const display = document.querySelector('.display')
const decimalPoint = document.querySelector('.decimal-point')
const equalsBtn = document.querySelector('.equals')
const allClearBtn = document.querySelector('.all-clear-btn')
const zeroBtn = document.querySelector('.zero')
const plusNegativeBtn = document.querySelector('.plus-negative-btn')
const percentBtn = document.querySelector('.percent-btn')
const backspaceBtn = document.querySelector('.backspace-btn')

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
        if (input2 === 0) {
            return 'Error cannot divide by zero'
        }
       return divide(input1, input2)
        
    }
}

const zeroBtnFunc = () => {
        if (hasDecimalPoint && !inOperation) {
            firstInputNumber += '0'
            display.textContent = firstInputNumber;
        } else if (hasDecimalPoint && inOperation) {
            secondInputNumber += '0'
            display.textContent = secondInputNumber; 
        } else if (!inOperation && firstInputNumber !== '0') {
            firstInputNumber += '0'
            display.textContent = firstInputNumber;
            console.log(firstInputNumber)
        } else if (inOperation && secondInputNumber !== '0') {
            secondInputNumber += '0'
            display.textContent = secondInputNumber; 
        }
    }

const decimalPointBtnFunc = () => {
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
}

const backspaceBtnFunc = () => {
    if (!inOperation && firstInputNumber.length > 1) {
        firstInputNumber = firstInputNumber.substring(0, firstInputNumber.length - 1)
        display.textContent = firstInputNumber
     } else if (inOperation && secondInputNumber.length > 1) {
        secondInputNumber = secondInputNumber.substring(0, secondInputNumber.length - 1)
         display.textContent = secondInputNumber
     } else if (!inOperation && firstInputNumber.length === 1) {
        firstInputNumber = firstInputNumber.substring(0, firstInputNumber.length - 1)
        display.textContent = '0'
     } else if (inOperation && secondInputNumber.length === 1) {
        secondInputNumber = secondInputNumber.substring(0, secondInputNumber.length - 1)
         display.textContent = '0'
     }
}

operands.forEach(button => {
    button.addEventListener('click', () => {
        if (!inOperation) {
            if (firstInputNumber === '0') {
                firstInputNumber = ''
            }
            firstInputNumber += button.textContent
        display.textContent = firstInputNumber
        } else {
            if (secondInputNumber === '0') {
                secondInputNumber = ''
            }
            secondInputNumber += button.textContent
            display.textContent = secondInputNumber
        }
    })
});

document.addEventListener('keydown', (e) => {
    if (/[1-9]/g.test(e.key)) {
        if (!inOperation) {
            if (firstInputNumber === '0') {
                firstInputNumber = ''
            }
            firstInputNumber += e.key
        display.textContent = firstInputNumber
        } else {
            if (secondInputNumber === '0') {
                secondInputNumber = ''
            }
            secondInputNumber += e.key
            display.textContent = secondInputNumber
        }
    } else if (e.key === '0') {
        zeroBtnFunc();
    } else if (e.key === '.') {
        decimalPointBtnFunc();
    } else if (e.key === 'Backspace') {
        backspaceBtnFunc();
    }
    
})

operators.forEach(button => {
    button.addEventListener('click', (e) => {
        if (!inOperation && firstInputNumber !== '') {
            inOperation = true;
            operator = e.target.textContent
            hasDecimalPoint = false;
        }  else if (firstInputNumber !== '' && secondInputNumber !== '' && inOperation) {
            display.textContent = operate(Number(firstInputNumber), 
              Number(secondInputNumber), operator);
            firstInputNumber = display.textContent;
            operator = e.target.textContent;
            secondInputNumber = '';
            hasDecimalPoint = false;
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

decimalPoint.addEventListener('click', decimalPointBtnFunc)

zeroBtn.addEventListener('click', zeroBtnFunc)

plusNegativeBtn.addEventListener('click', () => {
    if (!inOperation && firstInputNumber !== 0) {
        firstInputNumber = -firstInputNumber
        display.textContent = firstInputNumber
    } else if (inOperation && firstInputNumber !== 0) {
        secondInputNumber = -secondInputNumber
        display.textContent = secondInputNumber
    }
})

percentBtn.addEventListener('click', () => {
    if (!inOperation) {
       firstInputNumber = firstInputNumber / 100
       display.textContent = firstInputNumber
    } else if (inOperation) {
        secondInputNumber = secondInputNumber / 100
        display.textContent = secondInputNumber
    }
})

backspaceBtn.addEventListener('click', backspaceBtnFunc)
