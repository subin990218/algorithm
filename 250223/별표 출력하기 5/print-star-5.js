const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim().split("\n"))
let str = ""
for (let i = n; i >= 1; i -=1) {
    str = ""
    for (let j = 0; j < i; j += 1) {
        for (let a = 0; a <i; a += 1) {
            str += "*"
        }
        str += " "
    }
    console.log(str)
}