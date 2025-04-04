const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let arr = input[1].trim().split(" ").map(Number)

let ans = 100

for (let i = 0; i < n-1; i += 1) {
    for (let j = i+1; j < n; j += 1 ) {
        if (j-i < ans) {
            ans = j-i
        }
    }
}


console.log(ans)