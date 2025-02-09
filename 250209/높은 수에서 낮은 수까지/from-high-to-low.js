const fs = require("fs")

let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let ans = ""

if (a>=b) {
    for (let i = a; i >= b; i -= 1) {
        ans += (i + " ")
    }
} else {
    for (let i = b; i >= a; i -= 1) {
        ans += (i + " ")
    }
}

console.log(ans)