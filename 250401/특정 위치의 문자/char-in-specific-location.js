const fs = require("fs")

let arr = ['L', 'E', 'B', 'R', 'O', 'S']

let input = fs.readFileSync(0).toString().trim()

let idx = "None"

for (let i = 0; i < 6; i += 1) {
    if (input === arr[i]) {
        idx = i
    }
}

console.log(idx)