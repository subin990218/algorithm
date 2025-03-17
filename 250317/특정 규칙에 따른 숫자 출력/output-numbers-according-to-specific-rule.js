const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let str = ``
let cnt = 1
for (let i = 0; i < n; i += 1) {
    str = ``
    for (let j = 0; j < n; j += 1) {
        if (i <= j) {
            str += `${cnt} `
        if (cnt === 9) {
            cnt = 1
        } else {
            cnt += 1
        }
        } else {
            str += `  `
        }
    }
    console.log(str)
}