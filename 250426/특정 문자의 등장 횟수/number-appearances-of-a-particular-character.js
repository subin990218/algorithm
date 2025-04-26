const fs = require("fs")

let input = fs.readFileSync(0).toString().trim()

let ee = 0
let eb = 0

for (let i = 0; i < input.length -1; i += 1) {
    if (input.slice(i, i+2) === 'ee') {
        ee += 1
    } else if (input.slice(i, i+2) === 'eb') {
        eb += 1
    }
}

console.log(ee, eb)