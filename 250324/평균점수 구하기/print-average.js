const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let sumVal = 0

for (let elem of input) {
    sumVal += elem
}

console.log((sumVal/8).toFixed(1))