const fs = require("fs")

let arr = Array(9).fill(0)

let input1 = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input1[0])

let input = input1[1].split(" ").map(Number)


for (let elem of input) {
    arr[elem-1] += 1
}


console.log(arr.join("\n"))