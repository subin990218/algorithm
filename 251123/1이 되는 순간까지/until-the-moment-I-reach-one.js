const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function addOddNums(n) {
    if (n === 1) {
        return 0
    }
    else if (n % 2 === 0) {
        return addOddNums(n/2) + 1
    } else {
        return addOddNums(parseInt(n/3)) + 1
    }
}

console.log(addOddNums(n))