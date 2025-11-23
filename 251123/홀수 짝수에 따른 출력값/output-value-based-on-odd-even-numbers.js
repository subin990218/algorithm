const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

function halfFactorial(n) {
    if (n === 1) {
        return 1
    } else if (n === 2) {
        return 2
    }

    return halfFactorial(n-2) + n
}

console.log(halfFactorial(n))