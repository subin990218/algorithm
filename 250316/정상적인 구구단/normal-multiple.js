const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let str = ``

for (let i = 1; i <= n; i += 1) {
    str = ``
    for (let j = 1; j <= n; j += 1) {
        str += `${i} * ${j} = ${i*j}`
        if (j !== n) {
            str += `, `
        }
    }
    console.log(str)
}