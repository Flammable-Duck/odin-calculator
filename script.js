class Calculator {
    constructor() {
        this.display = document.querySelector(".display");
        this.display.textContent = "0";
        this.lastValue = 0;
        this.value = 0;
        this.answer = 0;
        this.operator = "";
    }
    updateDisplay(displayText) {
        this.display.textContent = displayText;
    }

    input(inNumber) {
        this.value = parseInt(`${this.value}${inNumber}`)
        this.updateDisplay(this.value)
    }

    clear() {
        this.lastValue = 0;
        this.value = 0;
        this.answer = 0;
        this.operator = "";
        this.updateDisplay(0)
        console.log('Cleared.')
    }

    setOperator(operator) {
        this.operator = operator
        if (this.lastValue != 0) {
            console.log(this.lastValue, "e")
        }
        this.lastValue = this.value
        this.value = 0
    }

    add(){
        console.log(`${this.value} + ${this.lastValue}`)
        this.answer = this.value + this.lastValue;
        this.updateDisplay(this.answer)
    }
    subtract(){
        console.log(`${this.lastValue} - ${this.value}`)
        this.answer = this.lastValue - this.value;
        this.updateDisplay(this.answer)
    }

    calculate() {
        switch (this.operator) {
            case '+':
                this.add();
                break;
            case '-':
                this.subtract();
                break;
            default:
                console.log(`Unknown operator: ${this.operator}`)
        }
        this.value = 0;
        this.lastValue = this.answer
    }
};

function attachButtons() {
    let numbers = document.querySelectorAll('.calculator > button')
    numbers.forEach(numberButton => numberButton.addEventListener('click', function(){
        switch (numberButton.id) {
            case 'Num1':
                calculator.input(1)
                break;
            case 'Num2':
                calculator.input(2)
                break;
            case 'Num3':
                calculator.input(3)
                break;
            case 'Num4':
                calculator.input(4)
                break;
            case 'Num5':
                calculator.input(5)
                break;
            case 'Num6':
                calculator.input(6)
                break;
            case 'Num7':
                calculator.input(7)
                break;
            case 'Num8':
                calculator.input(8)
                break;
            case 'Num9':
                calculator.input(9)
                break;
            case 'Num0':
                calculator.input(0)
                break;
            case 'Decimal':
                calculator.input('.')
                break;
            case 'Clear':
                calculator.clear()
                break;
            case 'Percent':
                calculator.setOperator('%')
                break;
            case 'Sign':
                calculator.setOperator('sign')
                break;
            case 'Divide':
                calculator.setOperator('/')
                break;
            case 'Multiply':
                calculator.setOperator('*')
                break;
            case 'Add':
                calculator.setOperator('+')
                break;
            case 'Subtract':
                calculator.setOperator('-')
                break;
            case 'Equals':
                calculator.calculate()
                break;
            default:
                console.log(`unknown button: ${numberButton.id}`)
                break;
        }
    }))
}

const calculator = new Calculator();
attachButtons()
