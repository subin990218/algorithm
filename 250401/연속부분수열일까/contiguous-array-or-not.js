const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let [n1, n2] = input[0].split(" ").map(Number)
let aArray = input[1].split(" ").map(Number)
let bArray = input[2].split(" ").map(Number)

let ans = 'No'

for (let i = 0; i < n1 - n2 + 1; i += 1) {
    if (aArray[i] === bArray[0]) {
        for (let j = 1; j < n2; j += 1) {
            if (aArray[i+j] !== bArray[j]) {
                break
            } else {
                if (j === n2 - 1) {
                    ans = "Yes"
                    break
                }
            }
        }
    }
}

console.log(ans)