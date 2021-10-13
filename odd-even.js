// even check
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNum1 = 2600;
const number1 = isEven(myNum1);
console.log('is my number even:', number1);

const herNum1 = 29997;
const number2 = isEven(herNum1);
console.log('is my number even:', number2);


//odd check
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const myNum2 = 2733;
const number3 = isOdd(myNum2);
console.log('is my number odd:', number3);

const herNum2 = 299978;
const number4 = isOdd(herNum2);
console.log('is my number odd:', number4);