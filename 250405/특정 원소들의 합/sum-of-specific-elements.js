const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n");
let ans = 0
let arr = []

for (let i = 0; i < 4; i += 1) {
    let tmpArr = input[i].split(" ").map(Number)
    arr.push(tmpArr)
    for (let j = 0; j < 4; j += 1) {
        if (i >= j) {
            ans += tmpArr[j]
        }
    }
}

console.log(ans)
