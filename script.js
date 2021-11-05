class Calculator {
    constructor() {
        this.display = document.querySelector(".display");
        this.display.textContent = "0";
        this.lastValue = 0;
        this.value = 0;
    }

    update(result) {
        this.value = 0
        this.display.textContent = this.lastValue = result;
    }

    addition() {
        this.update(this.value + this.lastValue);
    }

    subtraction() {
        this.update(this.lastValue - this.Value);
    }

    multiplication() {
        this.update(this.value * this.lastValue);
    }

    division() {
        this.update(this.value / this.lastValue);
    }

    percent() {
        this.update(this.value/100);
    }

    sign() {
        this.update(this.value*-1);
    }

    input(input) {
        this.value = parseInt(`${this.value}${input}`);
        this.display.textContent = this.value;
    }
    equals() {
        this.update(this.value)
    }

    clear() {
        this.value = 0;
        this.update(0);
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
                calculator.percent()
                break;
            case 'Sign':
                calculator.sign()
                break;
            case 'Divide':
                calculator.division()
                break;
            case 'Multiply':
                calculator.multiplication()
                break;
            case 'Add':
                calculator.addition()
                break;
            case 'Subtract':
                calculator.subtraction()
                break;
            case 'Equals':
                calculator.equals()
                break;
            default:
                console.log(`unknown button: ${numberButton.id}`)
                break;
        }
    }))
}

const calculator = new Calculator();
attachButtons()
