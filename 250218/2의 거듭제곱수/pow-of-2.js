const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let x = 0

while (true) {
    if (2**x == n) {
        console.log(x)
        break
    } else {
        x += 1
    }
}