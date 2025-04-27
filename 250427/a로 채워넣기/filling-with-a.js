const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("")

input[1] = input[input.length-2] = 'a'

console.log(input.join(""))

