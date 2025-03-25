const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

let cnt = 0

for (let i = 1 ; i <= n; i += 1) {
    let [scoreA, scoreB, scoreC, scoreD] = input[i].split(" ").map(Number)
    if ((scoreA + scoreB + scoreC + scoreD)/4 >= 60) {
        cnt += 1
        console.log("pass")
    } else {
        console.log("fail")
    }
}

console.log(cnt)