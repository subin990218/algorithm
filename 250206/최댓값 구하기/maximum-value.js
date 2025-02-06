const fs = require("fs")

let [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let ans = a

if (ans >= b && ans >=c) {
    ans = a
} else if (b >=ans && b >= c) {
    ans = b
} else {
    ans = c
}

console.log(ans)