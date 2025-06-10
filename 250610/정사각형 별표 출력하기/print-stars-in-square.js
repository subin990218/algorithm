const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

for (let i = 0 ; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
        process.stdout.write("*"+"")
    }
        console.log()
}