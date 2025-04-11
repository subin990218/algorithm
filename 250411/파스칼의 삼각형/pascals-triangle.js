const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let arr = []

for (let i = 0; i < n; i += 1) {
    let subArr = []
    for (let j = 0; j <= i; j += 1) {
        if (j === 0 || j === i) {
            subArr.push(1)
        } else {
            subArr.push(arr[i-1][j-1] + arr[i-1][j])
        }
    }
    arr.push(subArr)
}

arr.forEach(row=>console.log(row.join(" ")))