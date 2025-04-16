const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0])

let len = 0
let cnt = 0

for (let i = 1; i <= n; i += 1) {
    for (let elem of input[i]) {
        len += 1
        if (elem === 'a') {
            cnt += 1
        }
    }
}

console.log(len, cnt)



