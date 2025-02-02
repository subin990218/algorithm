const fs = require("fs");
let temperture = Number(fs.readFileSync(0).toString().trim())

let ans

if (temperture < 0) {
    ans = "ice"
} else if (temperture >= 100) {
    ans = "vapor"
} else {
    ans = "water"
}

console.log(ans)