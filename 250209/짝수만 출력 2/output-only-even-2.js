const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let ans = ""

while (a >= b) {
    if (a%2 == 0) {
        ans += (a + " ")
    }
    a -= 1
}

console.log(ans)