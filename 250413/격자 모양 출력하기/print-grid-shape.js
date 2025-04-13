const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,m] = input[0].split(" ").map(Number)

let arr = Array(n).fill(0).map(()=>Array(n).fill(0))

for (let i = 1; i<= m; i += 1) {
    let [x,y] = input[i].split(" ").map(Number)
    arr[x-1][y-1] = (x)*(y)
}

arr.forEach(row=>console.log(row.join(" ")))