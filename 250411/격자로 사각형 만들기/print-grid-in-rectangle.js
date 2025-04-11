const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let arr = Array(n).fill(1).map(()=>Array(n).fill(1))

for (let i = 1; i < n; i += 1) {
    for (let j = 1; j < n; j += 1) {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j] + arr[i][j-1]
    }
}

arr.forEach(row=>console.log(row.join(" ")))