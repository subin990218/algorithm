const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n").map(Number)
let ans = true
for (let i=0; i<=4; i+=1) {
    if (input[i]%3!==0) {
        ans = false
        break
    }
}

if (ans == true) {
    console.log(1)
} else {
    console.log(0)
}