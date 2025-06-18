const fs = require("fs")

let n = fs.readFileSync(0).toString()

for (let i = 0; i < n; i += 1) {
    for (let j = n-i-1; j > 0; j -= 1) {
        process.stdout.write("  ")
    }
    for (let k = 0; k < 2*i + 1; k += 1) {
        process.stdout.write("* ")
    }
    console.log()
}