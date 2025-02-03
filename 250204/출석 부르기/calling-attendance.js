const fs = require("fs")

let num = Number(fs.readFileSync(0).toString().trim())
let ans
if (num == 1) {
    ans = "John"
} else if (num == 2) {
    ans = "Tom"
} else if (num == 3) {
    ans = "Paul"
} else {
    ans = "Vacancy"
}

console.log(ans)
