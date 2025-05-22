const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function addN (x) {
    let ans = 0
    for (let i = 1; i <= x; i += 1) {
        ans += i
    }
    return Math.floor(ans / 10)
}

let answer = addN(n)

console.log(answer)