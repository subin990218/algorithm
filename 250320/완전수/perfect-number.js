const fs = require("fs")

let [start, end] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let cnt = 0

for (let i = start; i <= end; i += 1) {
    let sum = 0;
    for (let j = 1; j <= i-1; j += 1 ) {
        if (i % j === 0) {
            sum += j
        }
    }
    if (sum === i) {
        cnt += 1
    }
}

console.log(cnt)