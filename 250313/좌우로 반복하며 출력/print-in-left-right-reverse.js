const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let str = ``

for (let i = 0; i < n; i += 1) {
    str = ``
    for (let j = 0; j < n; j += 1) {
        if (i % 2 === 0) {
            str += j+1
        } else {
            str += n-j
        }
    }
    console.log(str)
}