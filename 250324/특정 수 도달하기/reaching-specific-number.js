const fs = require("fs")

let cnt = 0
let sum = 0

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

for (let elem of input) {
    if (elem >= 250) {
        break
    } else {
        cnt += 1
        sum += elem
    }
}

console.log(sum, (sum/cnt).toFixed(1))