const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

let arr = input[1].trim().split(" ").map(Number)

let cnt = 1, minVal = arr[0];

for (let elem of arr.slice(1)) {
    if (elem < minVal) {
        minVal = elem
        cnt = 1
    } else if (elem === minVal) {
        cnt += 1
    }
}

console.log(minVal, cnt)
