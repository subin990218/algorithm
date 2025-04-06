const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

let arr = input[1].split(" ").map(Number)
let ans = ""
let range = n


while (true) {
    let tmpIndex = 0
    let maxVal = 0
    for (let i = 0; i < range; i += 1) {
        if (arr[i] > maxVal) {
            maxVal = arr[i]
            tmpIndex = i
        }
    }
    range = tmpIndex        
    ans += `${range+1} `
    if (range === 0) {
        break
    }
}

console.log(ans)