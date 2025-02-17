const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let ans = 1;

for (let i = 0; i < b; i += 1) {
    ans *= a
}

console.log(ans)