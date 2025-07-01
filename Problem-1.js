class Calculator {
    calculate(a, b, operation) {
        if (operation === 'add'){
            return a+b;
        } else if (operation === 'subtract') {
            return a-b;
        } else if (operation === 'multiply'){
            return a*b;
        }else if (operation === 'divide'){
            if (b === 0) {
            return "cannot divide by zero";
            }else {
                return a/b;
            }
                
            }else {
                 return "invalid operation";
        }

    }
}
const Calc =new Calculator();
console.log(Calc.calculate(10,5, 'add')); // output: 15
console.log(Calc.calculate(10,5, 'subtract')); // output: 5
console.log(Calc.calculate(10,5, 'multiply')); // output: 50
console.log(Calc.calculate(10,5, 'divide')); // output: 2
console.log(Calc.calculate(10,0, 'divide')); // output: cannot divide by zero
console.log(Calc.calculate(10,2, 'pow')) // output: invalid operation