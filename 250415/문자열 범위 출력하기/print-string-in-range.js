const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("")
let str = ``

for (let i = 2; i < 10; i += 1) {
    str += input[i]
}

console.log(str)