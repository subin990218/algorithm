const fs = require("fs")

let n = 0

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

for (let i = 0; i < 10; i += 1) {
    if (input[i] % 3 ===0) {
        n = i
        break
    }
}

console.log(input[n-1])