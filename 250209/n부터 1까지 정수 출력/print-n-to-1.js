let fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())
let ans = ""
while (n >= 1) {
    ans += (n + " ")
    n -= 1

}

console.log(ans)