/*     factorial using function
    3! = 3 X 2 X 1
    5! = 5 X 4 X 3 X 2 X 1
*/

// factorial for loop with incremental
function factorial1(number) {
    var total = 1;
    for (var i = 1; i <= number; i++) {
        total = total * i;
    }
    return total;
}
var firstNumber = 5;
var result = factorial1(firstNumber);
console.log('Result is:', result);

var secondNumber = 7;
var result = factorial1(secondNumber);
console.log('Result is:', result);


//factorial for loop decremental 

function factorial2(number) {
    var total = 1;
    for (var i = number; i >= 1; i--) {
        total = total * i;
    }
    return total;
}
var firstNumber = 5;
var result = factorial2(firstNumber);
console.log('Result is:', result);

var secondNumber = 7;
var result = factorial2(secondNumber);
console.log('Result is:', result);