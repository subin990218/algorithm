const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

let cnt = 0

function count3Num (x) {
    if (x%3 === 0) {
        cnt += 1
    } else {
        for (let elem of String(x)) {
            if (elem === '3' || elem === '6' || elem === '9') {
                cnt += 1
                break
            }
        }
    }
}

for (let i = A; i <= B; i += 1) {
    count3Num(i)
}

console.log(cnt)