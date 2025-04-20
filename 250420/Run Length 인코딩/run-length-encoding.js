const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("")
let str = ``
let prev = input[0]
let cnt = 1
for (let elem of input.slice(1)) {
    if (elem === prev) {
        cnt += 1
    } else {
        str += `${prev}${cnt}`
        prev = elem
        cnt = 1
    }
}
str += `${prev}${cnt}`


console.log(str.length)
console.log(str)