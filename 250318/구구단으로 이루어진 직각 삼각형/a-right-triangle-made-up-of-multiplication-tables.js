const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())
let str = ``

for (let i = 0; i < n; i += 1) {
    for (let j = 1; j <= n-i; j += 1) {
        str += `${i+1} * ${j} = ${(i+1)*j}`
        if (j !== n-i) {
            str += ` / `
        } else {
            str += `\n`
        }
    }
}

console.log(str)