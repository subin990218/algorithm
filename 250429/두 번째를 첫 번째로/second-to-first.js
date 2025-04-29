const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("")
let n = input[1]
for (let i = 0; i < input.length; i += 1) {
    if (input[i] === n) {
        input[i] = input[0]
    }
}


console.log(input.join(""))
