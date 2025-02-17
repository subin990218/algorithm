const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let ans = 1
for (let i = 1; i <= b; i += 1) {
    if (i%a===0) {
        ans *= i
    }
}

console.log(ans)