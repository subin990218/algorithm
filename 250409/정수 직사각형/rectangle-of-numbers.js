const fs = require("fs")

let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = Array(n).fill(0).map(()=> Array(m).fill(0))

let cnt = 1

for (let row of arr) {
    let str = ""
    for (let elem of row) {
        str += cnt + " "
        cnt += 1
    }
    console.log(str)
}