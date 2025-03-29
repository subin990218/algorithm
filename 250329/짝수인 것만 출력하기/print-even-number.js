const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

let arr = input[1].split(" ").map(Number)

let ans = []

for (let i = 0 ; i < n; i += 1) {
    if (arr[i]%2 === 0) {
        ans.push(arr[i])
    }
}

console.log(ans.join(" "))