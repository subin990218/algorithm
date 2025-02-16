const fs = require("fs")

let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sumVal = 0;
let cnt = 0;

for (let i = a; i <= b; i += 1) {
    if (i % 5 == 0 || i % 7 == 0) {
        sumVal += i
        cnt += 1
    }
}

console.log(sumVal, (sumVal / cnt).toFixed(1))