const fs = require("fs");
let [c, n] = fs.readFileSync(0).toString().trim().split(" ")

n = Number(n)

let ans =""

if (c === "A") {
    for (let i = 1; i <= n; i++) {
        ans += (i + " ")
    }
} else if (c === "D") {
    for (let i = n; i >= 1; i -= 1) {
        ans += (i + " ")
    }
}
console.log(ans);