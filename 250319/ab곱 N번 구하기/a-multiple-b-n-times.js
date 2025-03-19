const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let ans = 1

for (let i = 1; i <= n; i += 1) {
    ans = 1
    let [a,b] = input[i].split(" ").map(Number)
    for (let j = a; j <= b; j += 1) {
        ans *= j
    }
    console.log(ans)
}