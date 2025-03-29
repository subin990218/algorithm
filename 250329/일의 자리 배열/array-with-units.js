const fs= require("fs")

let arr = []

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let a1 = input[0]
let a2 = input[1]

arr.push(a1, a2)

for (let i = 2; i < 10; i += 1) {
    arr[i] = (arr[i-1] + arr[i-2]) % 10
}

console.log(arr.join(" "))