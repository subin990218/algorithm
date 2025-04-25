const fs = require("fs")

let input = fs.readFileSync(0).toString().trim()

let ee = "No"
let ab = "No"

for (let i = 0; i < input.length - 1; i += 1) {
    if (input.slice(i, i+2) === 'ee') {
        ee = "Yes"
    } else if (input.slice(i, i+2) === 'ab') {
        ab = "Yes"
    }
}

console.log(ee, ab)