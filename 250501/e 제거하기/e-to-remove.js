const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("")

for (let i = 0; i < input.length; i += 1) {
    if (input[i] === 'e') {
        input.splice(i,1)
        break
    }
}

console.log(input.join(""))
