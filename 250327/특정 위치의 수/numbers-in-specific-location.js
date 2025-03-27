const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let ans = 0
for (let i = 0; i < 10; i += 1) {
    if (i === 2 || i === 4 || i === 9 ) {
        ans += input[i]
    }
}

console.log(ans)