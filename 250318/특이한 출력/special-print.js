const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())
let str = ``

for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
        if ((i + j) % 4=== 0) {
            str += `(${i}, ${j})\n`
        } else {
            str += `(${i}, ${j}) `
        }
    }
}

console.log(str)