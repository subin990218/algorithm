const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
str = ''
for (let elem of input.slice(1)) {
    str += elem
}

console.log(str)