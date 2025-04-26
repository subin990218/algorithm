const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split("\n")

let ans = 0

for (let i = 0; i < a.length - b.length + 1; i += 1) {
    if (a.slice(i, i+ b.length) === b) {
        ans += 1
    }
}

console.log(ans)