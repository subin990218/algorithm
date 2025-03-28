const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let evenNum = 0
let three = 0

for (let i = 1; i <= 10; i += 1) {
    if (i%2===0) {
        evenNum += input[i-1]
    }
    if (i%3===0) {
        three += input[i-1]
    }
}

console.log(evenNum, (three/3).toFixed(1))