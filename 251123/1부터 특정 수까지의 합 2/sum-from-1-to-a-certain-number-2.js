const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

function makeAnswer(n) {
    if (n === 1) {
        return 1
    }
    return makeAnswer(n-1)+n
}

console.log(makeAnswer(n))