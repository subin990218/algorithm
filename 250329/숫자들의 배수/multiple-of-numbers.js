const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let cnt = 0
let ans = []
let baesu = 1
while (cnt<2) {
    if ((n*baesu)%5 === 0) {
        cnt += 1
    }
    ans.push(n*baesu)
    baesu += 1
}

console.log(ans.join(" "))