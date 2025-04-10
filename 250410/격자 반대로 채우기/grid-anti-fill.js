const fs = require("fs")

let n = Number(fs.readFileSync(0).toString())

let arr = Array(n).fill(0).map(()=>Array(n).fill(0))
let cnt = 1


for (let j = n-1; j >= 0; j -= 1) {
    if (n%2===0){if (j%2 !== 0) {
        for (let i = n-1; i >= 0; i -= 1) {
            arr[i][j] = cnt
            cnt += 1 
        }
    } else {
        for (let i = 0; i < n; i += 1) {
            arr[i][j]=cnt
            cnt += 1
        }
    }} else {
        if (j%2 === 0) {
        for (let i = n-1; i >= 0; i -= 1) {
            arr[i][j] = cnt
            cnt += 1 
        }
    } else {
        for (let i = 0; i < n; i += 1) {
            arr[i][j]=cnt
            cnt += 1
        }
    }
    }
    
}

arr.forEach(row=>console.log(row.join(" ")))