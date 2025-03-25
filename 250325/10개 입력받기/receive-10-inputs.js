const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let cnt = 0
let sumVal = 0

for (let elem of input) {
    if (elem === 0) {
        break
    } else {
        sumVal += elem
        cnt += 1
    }
}

console.log(sumVal, (sumVal/cnt).toFixed(1))
