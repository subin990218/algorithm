const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function fibonacciFunction(n) {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacciFunction(n-1) + fibonacciFunction(n-2)
}

console.log(fibonacciFunction(n))