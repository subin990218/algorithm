const fs = require("fs")

let a2 = Number(fs.readFileSync(0).toString().trim())

let arr = []

let a1 = 1

arr.push(a1, a2)

for (let i = 0; i < 100; i += 1) {
    arr.push(arr[i]+arr[i+1])
    if (arr[i]+arr[i+1] > 100) {
        break
    } 
}

console.log(arr.join(" "))