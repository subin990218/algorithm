const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let cnt = 2;

let str = ``

for (let i = 0; i < n; i += 1) {
    str = ``
    for (let j = 0; j < n; j += 1) {
        str += `${cnt} `
        if (cnt === 8) {
            cnt = 2
        } else {
            cnt += 2
        }
    }
    console.log(str)
}