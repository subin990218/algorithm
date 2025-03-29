const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let n = 0

while (true) {
    if (input[n] === 0) {
        break
    } else {
        n += 1
    }
}


console.log(input[n-3]+input[n-2]+input[n-1])