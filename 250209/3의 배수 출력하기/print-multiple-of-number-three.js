const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let ans = ""
let i = 1

while (i <= n) {
    if (i%3 == 0) {

    ans += (i + " ")
    }
    i += 1
}

console.log(ans)