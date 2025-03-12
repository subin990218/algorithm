const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())
let str = ``
let cnt = 1;

for (let i = 0; i < n; i += 1) {
    str = ``
    for (let j = 0; j < n; j += 1) {
        str += `${cnt} `
        cnt += 1
    }
    console.log(str)
}