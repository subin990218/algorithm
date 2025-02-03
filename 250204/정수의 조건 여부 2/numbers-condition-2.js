const fs = require("fs")

let input = Number(fs.readFileSync(0).toString().trim())

let ans = ""

if (input==5) {
    ans = "A"
}

if (input %2==0) {
    ans = "B"
}

console.log(ans)