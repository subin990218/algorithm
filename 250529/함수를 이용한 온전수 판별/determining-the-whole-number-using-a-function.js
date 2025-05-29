const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

function isWholeNumber(x) {
    if (x%2 !== 0 && x%10 !== 5 && !(x%3 === 0 && x%9!== 0)) {
        return true
    } else {
        return false
    }
}

let ans = 0

for (let i = a; i <= b; i += 1) {
    if (isWholeNumber(i)) {
        ans += 1
    }
}

console.log(ans)