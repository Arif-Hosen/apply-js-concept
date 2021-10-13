//function
function cheackEvenNumbers(num) {
    if (num % 2 == 0 && num <= 100) {
        console.log('Even number=', num);
        return num;

    }
    else {
        console.log(num + "=Odd number");
        return num;
    }
}
var number = cheackEvenNumbers(90);
console.log("The Number is", number);

// variable keyword let and const

// value of variable could change 
let price = 230;
price = 120;
price = 100;

//value of the variable will not change
const myName = 'arif';
console.log(myName);

