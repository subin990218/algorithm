const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let cnt = 0
let sumVal = 0

for (let elem of input) {
    if (elem === 0) {
        break
    } else {
        if (elem % 2 === 0) {
            cnt += 1
            sumVal += elem
        }
    }
}

console.log(cnt, sumVal)