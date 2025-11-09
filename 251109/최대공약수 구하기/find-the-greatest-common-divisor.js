const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

function findAnswerNum(n, m) {
    let ans = 1;
    let smallParameter = n - m >= 0 ? m : n;
    for (let i = 1; i <= smallParameter; i += 1) {
        if ((n % i === 0) && (m % i === 0)) {
            ans = i
        }
    }
    return ans
}

console.log(findAnswerNum(n,m))
