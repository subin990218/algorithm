const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

let arr = input[1].toString().trim().split(" ").map(Number)

let maxVal = Number.MIN_SAFE_INTEGER, secondVal = Number.MIN_SAFE_INTEGER + 1

for (let elem of arr) {
    if (elem > secondVal) {
        if (elem > maxVal) {
            maxVal = elem
        } else {
            secondVal = elem
        }
    }
}

console.log(maxVal, secondVal)