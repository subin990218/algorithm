const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n").map(Number)

let n = input[0]

let ans = 0;

for (let i = 1; i <=n; i +=1) {
    if (input[i] % 2 !=0 && input[i]%3 == 0) {
        ans += input[i]
    }
}

console.log(ans)

