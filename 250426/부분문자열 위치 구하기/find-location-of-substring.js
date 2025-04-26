const fs = require("fs")

let [input, n] = fs.readFileSync(0).toString().trim().split("\n")

console.log(input.indexOf(n))