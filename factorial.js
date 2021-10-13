/*     factorial
    3! = 3 X 2 X 1
    5! = 5 X 4 X 3 X 2 X 1 = 120
*/

var factorial = 1;
for (i = 1; i <= 5; i++) {
    factorial = factorial * i;
}
console.log('Result=', factorial);