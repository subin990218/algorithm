const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let str = ``
let tmp = ``
for (let i = 2; i <= n; i += 1) {
    tmp = str;
    str += `${i} `
    for (let j = 2; j < i; j += 1) {
        if (i%j === 0) {
            str = tmp
            tmp = ``
            break
        }
    }
}

console.log(str)