const fs = require("fs")

let input = fs.readFileSync(0).toString().trim()

let ans

if (input == "S") {
    ans = "Superior"
} else if (input == "A") {
    ans = "Excellent"
} else if (input == "B") {
    ans = "Good"
} else if (input == "C") {
    ans = "Usually"
} else if (input == "D") {
    ans = "Effort"
} else {
    ans = "Failure"
}

console.log(ans)