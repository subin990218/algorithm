const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let sumVal = 0
let ans = 0
for (let i =1; i <= 100; i += 1) {
    sumVal += i
    ans = i
    if (sumVal >= n) {
        break
    }
}

console.log(ans)