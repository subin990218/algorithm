const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = 4
let arr = []

for (let i = 0; i < n; i += 1) {
    let tmpArr = input[i].trim().split(" ").map(Number)
    let ans = 0
    arr.push(tmpArr)
    for (let elem of tmpArr) {
        ans += elem
    }
    console.log(ans)
}