const fs = require("fs")

let [start, end] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let ans = 0

for (let i = start; i <= end; i += 1) {
    let cnt = 0
    for (let j = 1; j <= i; j += 1) {
        if (i % j === 0) {
            cnt += 1
        }
    } 
    if (cnt === 3) {
        ans += 1
    }
}

console.log(ans)