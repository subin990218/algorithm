const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const MIN_INT = Number.MIN_SAFE_INTEGER

let max_val = MIN_INT

for (let i = 0; i < 10; i += 1) {
    if (input[i]>max_val) {
        max_val = input[i]
    }
}

console.log(max_val)

