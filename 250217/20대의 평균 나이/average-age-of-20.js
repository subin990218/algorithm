const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n").map(Number)

let sumVal = 0
let cnt = 0
let index = 0
while (true) {
    if (input[index] >= 30) {
        console.log((sumVal/cnt).toFixed(2))
        break
    } else {
        sumVal += input[index]
        cnt += 1
        index += 1
    }
}
