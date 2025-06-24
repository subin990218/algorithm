const fs = require("fs")

let n = fs.readFileSync(0).toString().trim()

for (let i = 1; i <=n; i+= 1) {
    if (i%2!=0) {
        console.log("*")

    } else {
        for (let j = 0; j < i; j+= 1) {
            process.stdout.write("* ")
        }
        console.log()
    }
}