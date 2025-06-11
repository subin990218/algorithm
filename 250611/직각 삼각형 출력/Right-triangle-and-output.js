const fs = require("fs")

let n = fs.readFileSync(0).toString().trim()

for (let i = 0; i < n ; i += 1) {
    for (let j = 0; j < 2*i + 1; j += 1) {
        process.stdout.write("*"+"")
    }
    console.log()
}