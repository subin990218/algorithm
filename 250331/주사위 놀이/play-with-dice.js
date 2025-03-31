const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = Array(6).fill(0)

for (let elem of input) {
    arr[elem-1] += 1
}

for (let i = 0; i < 6; i += 1) {
    console.log(`${i+1} - ${arr[i]}`)
}