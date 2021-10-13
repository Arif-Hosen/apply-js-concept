/*     factorial using recursion
    3! = 3 X 2 X 1          = 3 X 2!
    5! = 5 X 4 X 3 X 2 X 1  = 5 X 4!
*/

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const myFactorial = factorial(5);
console.log('Result=', myFactorial);
