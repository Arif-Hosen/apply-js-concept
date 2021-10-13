//factorial while loop with incremental
function getFactorial1(number) {
    let factorial = 1;
    var i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var result = getFactorial1(5);
console.log(result);

var result = getFactorial1(7);
console.log(result);


//factorial while loop with decremental
function getFactorial2(number) {
    let factorial = 1;
    var i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
var result = getFactorial2(6);
console.log(result);

var result = getFactorial2(7);
console.log(result);