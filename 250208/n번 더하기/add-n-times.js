const fs = require("fs")

let [a,n] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let ans = ""

for (i = 1; i <= n;     i += 1) {
    a += n
    console.log(a)
}