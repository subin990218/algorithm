const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

let arr = input[1].trim().split(" ").join("")

let ans = ""
let cnt = 0

for (let elem of arr) {
    ans += elem
    cnt += 1
    if (cnt === 5) {
        console.log(ans)
        ans = ""
        cnt = 0
    }
}

console.log(ans)

