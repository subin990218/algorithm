const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let inputLen = Number(input[0])
let condition = input[input.length - 1]

let cnt = 0; 
let lenAvg = 0;

for (let elem of input.slice(1, inputLen+1)) {
    if (elem[0] === condition) {
        cnt += 1
        lenAvg += elem.length
    }
}

lenAvg = (lenAvg/cnt).toFixed(2)

console.log(cnt, lenAvg)

