const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.

function makeAns() {
    // 더하는 부분
    let ans = 0;
    let tempM = m;
    ans += A[tempM - 1];
    while (tempM !== 1) {
        if (tempM % 2 === 0) {
            tempM /= 2;
        } else {
            tempM -= 1;
        }
        ans += A[tempM - 1];
    }
    return ans
}

console.log(makeAns())