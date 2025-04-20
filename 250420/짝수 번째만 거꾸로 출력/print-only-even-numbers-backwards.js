const fs = require("fs")

let input = fs.readFileSync(0).toString().trim()
let result = []
for (let i = 0; i < input.length; i += 1) {
    if (i%2 !== 0) {
        result.push(input[i])
    }
}

console.log(result.reverse().join(""))