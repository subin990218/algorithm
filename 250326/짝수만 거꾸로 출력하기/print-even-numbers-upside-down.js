const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

let arr = input[1].split(" ").map(Number)
let ans = []
for (let elem of arr) {
    if (elem%2 === 0) {
        ans.push(elem)
    }
}

console.log(ans.reverse().join(" "))