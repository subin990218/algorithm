const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ")

for (let i = input.length -1; i >= 0; i -= 1) {
    console.log(input[i])
}