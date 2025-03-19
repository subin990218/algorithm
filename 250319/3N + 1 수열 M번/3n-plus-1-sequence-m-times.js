const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

let cnt = 0

for (let i = 1; i <= n; i += 1) {
    cnt = 0
    let m = Number(input[i])
    while (m !== 1) {
        if (m%2===0) {
            m /= 2
        } else {
            m = m*3 + 1
        }
        cnt += 1
    }
    console.log(cnt)
}