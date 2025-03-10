const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let str = ""

for (let i = n; i >0; i -= 1) {
    str = ``
    for (let j = n; j>0; j -= 1) {
        str += `${j} `
    }
    console.log(str)
}