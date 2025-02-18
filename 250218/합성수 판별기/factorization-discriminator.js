const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let ans = false

for (let i = 2; i<=n-1; i+=1) {
    if (n%i==0) {
        ans = true
        break
    }
}

if (ans ==true) {
    console.log("C")
} else {
    console.log("N")
}