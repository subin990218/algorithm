const fs = require("fs")
let input = Number(fs.readFileSync(0).toString().trim())

let ans

if (input>=1.0) {
    ans = "High"
} else if (input >= 0.5) {
    ans = "Middle"
} else {
    ans = "Low"
}

console.log(ans)