const fs = require("fs")

let score = Number(fs.readFileSync(0).toString().trim())
let ans
if (score >= 90) {
    ans = "A"
} else if (score >= 80) {
    ans = "B"
} else if (score >= 70) {
    ans ="C"
} else if (score >= 60) {
    ans = "D"
} else {
    ans = "F"
}

console.log(ans)