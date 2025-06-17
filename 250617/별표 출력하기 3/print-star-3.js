const fs = require("fs")

let n = fs.readFileSync(0).toString().trim()

for (let i = 0; i < n; i += 1) {
    for (let x = 0; x < i; x += 1) {
        process.stdout.write("  ")
    }
    for (let j = 2*n - 1 - 2*i; j > 0; j -= 1) {
        process.stdout.write("*"+" ")
    }
    console.log()
}