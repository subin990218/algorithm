const fs = require("fs")

let ans = 0

let n = fs.readFileSync(0).toString().trim().split(" ").map(Number)

for (let elem of n) {
    ans += elem
}

console.log(ans)

