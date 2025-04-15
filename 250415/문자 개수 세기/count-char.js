const fs = require("fs")

let [input1, input2] = fs.readFileSync(0).toString().trim().split("\n")

let cnt  = 0

for (let elem of input1) {
    if (elem === input2) {
        cnt += 1
    }
}

console.log(cnt)

