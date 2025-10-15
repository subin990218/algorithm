const fs = require("fs")

let a = fs.readFileSync(0)

a = a * 2 + 3

console.log(a)