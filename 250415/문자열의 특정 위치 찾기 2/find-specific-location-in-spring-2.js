const fs = require("fs")

let input = fs.readFileSync(0).toString().trim()

let arr = ["apple", "banana", "grape", "blueberry", "orange"]

let cnt = 0

for (let elem of arr) {
    if (elem[2] === input || elem[3] === input) {
        console.log(elem)
        cnt += 1
    }
}

console.log(cnt)