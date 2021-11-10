class Calculator {
    constructor() {
        this.displayElement = document.querySelector(".display");
        this.inputValue = 0.0
        this.lastValue = 0.0
        this.operation = ""
        this.solution = null
        this.isDecimal = false
    }
    calculate() {
        switch (this.operation){
            case "+":
                this.solution = this.inputValue + this.lastValue;
                break;
            case "-":
                this.solution = this.lastValue - this.inputValue;
                break;
            case "*":
                this.solution = this.lastValue * this.inputValue;
                break;
            case "/":
                this.solution = this.lastValue / this.inputValue;
                break;
        }
        this.solution = Math.round(this.solution*1000000)/1000000;
    }
    equals() {
        if (!this.lastValue && this.solution) {
            // this allows users to input another calculation using the past result
            this.lastValue = this.solution;
        }
        if (this.inputValue && this.lastValue && this.operation) {
            this.calculate();
            this.display(this.solution);
            this.inputValue = "";
            return;
        }
    }
    input(input) {
        if (this.isDecimal == true && input != '.') {
            this.isDecimal = false;
            if (!this.inputValue) {
                input = `0.${input}`;
            } else {
                input = `.${input}`;
            }
        }
        if (input == '.') {this.isDecimal = true};
        this.inputValue = parseFloat(`${this.inputValue}${input}`);
        this.display(this.inputValue);
    }
    setOperator(operator) {
        if (operator.value == "=") {this.equals(); return};
        this.display(operator.value);
        this.operation= operator.value;
        this.lastValue = this.inputValue;
        this.inputValue = "";
        this.equals();
    }
    doFunctions(func) {
        switch (func.value) {
            case 'c':
                this.clear();
                break;
            case '%':
                this.inputValue /= 100
                this.display(this.inputValue)
                break;
            case 'sign':
                this.inputValue *= -1
                this.display(this.inputValue)
        }
    }
    clear() {
        this.display.textContent = "";
        this.inputValue = 0.0;
        this.lastValue = 0.0;
        this.operation = "";
        this.solution = null;
    }
    display(input) {
        this.displayElement.textContent = input;
    }
}

function attachNums(calculator) {
    const numberButtons = document.querySelectorAll('.calculator .Number')
    numberButtons.forEach(numberButton => numberButton.addEventListener('click', function(){
        calculator.input(numberButton.value)
    }))
}

function attachOperators(calculator) {
    const operators = document.querySelectorAll('.calculator .Operator')
    operators.forEach(operator => operator.addEventListener('click', function(){
        calculator.setOperator(operator)
    }))
}

function attachFunctions(calculator) {
    const functions = document.querySelectorAll('.calculator .function')
    functions.forEach(functions => functions.addEventListener('click', function(){
        calculator.doFunctions(functions)
    }))
}

const calculator = new Calculator();

attachFunctions(calculator);
attachNums(calculator);
attachOperators(calculator);
