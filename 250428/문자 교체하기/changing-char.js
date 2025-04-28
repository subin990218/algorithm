const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split(" ")



b = a.slice(0,2) + b.slice(2)

console.log(b)