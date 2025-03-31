const fs = require("fs")

let arr = Array(10).fill(0)

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

for (let elem of input) {
    if (elem === 0) {
        break
    }
    arr[parseInt(elem/10)] += 1
}

for (let i = 1; i <= 9; i += 1) {
    console.log(`${i} - ${arr[i]}`)
}