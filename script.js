const Display = document.querySelector('.display')
let inputValue = 0.0
let lastValue = 0.0
let operation = ""
let solution = null
let isDecimal = false

function calculate() {
    switch (operation){
        case "+":
            solution = inputValue + lastValue;
            break;
        case "-":
            solution = lastValue - inputValue;
            break;
        case "*":
            solution = lastValue * inputValue;
            break;
        case "/":
            solution = lastValue / inputValue;
            break;
    }
    solution = Math.round(solution*1000000)/1000000
}

function equals() {
    if (!lastValue && solution) {
        // this allows users to input another calculation using the past result
        lastValue = solution
    }
    if (inputValue && lastValue && operation) {
        calculate()
        display(solution)
        inputValue = ""
        return
    }
}

function input(input) {
    if (isDecimal == true && input != '.') {
        isDecimal = false;
            console.log('bar')
        if (!inputValue) {
            input = `0.${input}`;
            console.log('foo')
            console.log(input)
        } else {
            input = `.${input}`;
        }
    }
    if (input == '.') {isDecimal = true}
    inputValue = parseFloat(`${inputValue}${input}`)
    display(inputValue)
}

function setOperator(operator) {
    if (operator.value == "=") {equals(); return}
    display(operator.value)
    operation= operator.value
    lastValue = inputValue
    inputValue = ""
    equals()
}

function doFunctions(func) {
    console.log(func.value)
    switch (func.value) {
        case 'c':
            clear();
            break;
        case '%':
            inputValue /= 100
            display(inputValue)
            break;
        case 'sign':
            inputValue *= -1
            display(inputValue)
    }
}

function clear() {
    Display.textContent = ""
    inputValue = 0.0
    lastValue = 0.0
    operation = ""
    solution = null
}

function display(input) {
    Display.textContent = input
}

function attachNums() {
    const numberButtons = document.querySelectorAll('.calculator .Number')
    numberButtons.forEach(numberButton => numberButton.addEventListener('click', function(){
        input(numberButton.value)
    }))
}

function attachOperators() {
    const operators = document.querySelectorAll('.calculator .Operator')
    operators.forEach(operator => operator.addEventListener('click', function(){
        setOperator(operator)
    }))
}

function attachFunctions() {
    const functions = document.querySelectorAll('.calculator .function')
    functions.forEach(functions => functions.addEventListener('click', function(){
        doFunctions(functions)
    }))
}

attachFunctions()
attachNums()
attachOperators()
