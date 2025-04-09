const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let num = 1
let answer = Array(n).fill(0).map(()=>Array(n).fill(0))

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        answer[j][i] = num
        num += 1
    }
}

answer.forEach(row=> console.log(row.join(" ")))