const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

for (let i = 1; i <= n; i += 1) {
    let ans = 0
    let [a,b] = input[i].split(" ").map(Number)
    for (let j = a; j <= b; j += 1) {
        if (j % 2 === 0) {
            ans += j
        }
    }
    console.log(ans)
}