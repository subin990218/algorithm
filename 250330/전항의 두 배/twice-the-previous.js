const fs = require("fs")

let [a1,a2] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = []

arr.push(a1, a2)

for (let i = 0; i < 8; i += 1) {
    arr.push(arr[i+1]+2*arr[i])
}

console.log(arr.join(" "))