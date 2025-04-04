const fs = require("fs")

// 32를 빼면 소문자가 대문자 됨

let input = fs.readFileSync(0).toString().trim().split("\n")
let arr = []

for (let i = 0; i < input.length; i += 1) {
    arr.push(input[i].trim().split(" "))
}

for (let i = 0; i < arr.length; i += 1) {
    let ans = ""
    for (let j = 0; j < arr[i].length; j += 1) {
        
        ans += arr[i][j].toUpperCase() + " "
    }
    console.log(ans)
}
