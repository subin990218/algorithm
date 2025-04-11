const fs = require("fs")

let arr = Array(5).fill(0).map(()=> Array(5).fill(0))

for (let i = 0; i < 5; i += 1) {
    arr[0][i] = 1
    arr[i][0] = 1
}

for (let i = 1; i < 5; i += 1) {
    for (let j = 1; j < 5; j += 1) {
        arr[i][j] = arr[i-1][j] + arr[i][j-1]
    }
}

arr.forEach(row=>console.log(row.join(" ")))

