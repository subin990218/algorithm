const fs = require("fs")
let [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = Array(n).fill(0).map(()=>Array(m).fill(0))

let cnt = 0

for (let j = 0; j < m ; j+=1) {
    if (j%2===0) {
        for (let i = 0; i < n; i += 1) {
            arr[i][j] = cnt
            cnt += 1
        }
    } else {
        for (let i = n-1; i >= 0; i -= 1) {
            arr[i][j] = cnt
            cnt += 1
        }
    }
}

arr.forEach((row)=>console.log(row.join(" ")))
