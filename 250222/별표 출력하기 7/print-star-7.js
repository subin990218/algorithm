const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())


let ans = ""

for (let i = 0; i < n; i += 1) {
    ans = ""
    for (let j = 0; j<=i; j+=1) {
        ans += "* "
    }
    console.log(ans)
}