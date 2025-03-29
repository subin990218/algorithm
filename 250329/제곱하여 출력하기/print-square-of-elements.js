const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let arr = input[1].split(" ").map(Number)

arr = arr.map(elem => elem ** 2)

console.log(arr.join(" "))