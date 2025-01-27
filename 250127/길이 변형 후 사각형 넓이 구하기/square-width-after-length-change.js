const fs = require("fs")

let input = fs.readFileSync(0).toString().split(" ")

let garo = Number(input[0]) + 8
let saero = Number(input[1]) * 3

console.log(garo)
console.log(saero)
console.log(garo*saero)