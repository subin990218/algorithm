const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,m] = input[0].split(" ").map(Number)

let arr = Array(n).fill(0).map(()=>Array(n).fill(0))

for (let i = 1; i <= m; i += 1) {
    let [a,b] = input[i].split(" ").map(Number)
    arr[a-1][b-1] = 1
}

arr.forEach(row=>console.log(row.join(" ")))