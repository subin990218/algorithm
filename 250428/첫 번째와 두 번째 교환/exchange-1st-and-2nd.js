const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("")

let first = input[0]
let second = input[1]

for (let i = 0; i < input.length; i+=1) {
    if (input[i] === first) {
        input[i] = second
    } else if (input[i] === second) {
        input[i] = first
    }
}

console.log(input.join(""))