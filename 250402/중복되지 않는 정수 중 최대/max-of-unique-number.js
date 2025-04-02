const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let arr = input[1].trim().split(" ").map(Number)
let cntArr = Array(1001).fill(0)

for (let elem of arr) {
    cntArr[elem] += 1        
}
let maxVal = -1
for (let i = 0; i < 1001; i += 1) {
    if (cntArr[i] !== 1) {
        continue
    } else {
        if (cntArr[i] > maxVal) {
            maxVal = i 
        }
    }
}

console.log(maxVal)