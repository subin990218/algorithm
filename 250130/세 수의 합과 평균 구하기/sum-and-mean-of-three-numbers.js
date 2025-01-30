const fs = require("fs");

let input = fs.readFileSync(0).toString().split(" ")

let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])

let hap = a+b+c
console.log(hap)

console.log(parseInt(hap/3))