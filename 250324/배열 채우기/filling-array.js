const fs = require("fs")

let arr = []

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

for (let elem of input) {
    if (elem === 0) {
        break
    } else {
        arr.push(elem)
    }
}

console.log(arr.reverse().join(" "))