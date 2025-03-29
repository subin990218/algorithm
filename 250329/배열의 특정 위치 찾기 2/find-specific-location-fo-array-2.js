const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let evenNum = 0
let oddNum = 0

for (let i = 0; i < 10; i += 1) {
    if (i%2 !== 0) {
        evenNum += input[i]
    } else {
        oddNum += input[i]
    }
}
let ans = 0
ans = evenNum - oddNum

if (ans < 0) {
    ans *= -1
}

console.log(ans)