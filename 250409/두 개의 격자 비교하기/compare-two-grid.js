const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let [n, m] = input[0].split(" ").map(Number)

let arr = []
let arr2 = []


for (let a = 1; a < n+1; a += 1) {
    arr.push(input[a].trim().split(" ").map(Number))
}
for (let a = n+1; a < 2*n+1; a += 1) {
    arr2.push(input[a].trim().split(" ").map(Number))
}

for (let a = 0; a < n; a += 1) {
    for (let b = 0; b < m; b += 1) {
        if (arr[a][b] === arr2[a][b]) {
            arr[a][b] = 0
        } else {
            arr[a][b] = 1
        }
    }
}

for (let row of arr) {
    let str = ""
    for (let elem of row) {
        str += elem + " "
    }
    console.log(str)
}
