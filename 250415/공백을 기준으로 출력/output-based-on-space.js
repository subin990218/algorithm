const fs = require("fs")

let [input1, input2] = fs.readFileSync(0).toString().trim().split("\n")

let ans = ``

for (let elem of input1) {
    if (elem !== " ") {
        ans += elem
    }
}

for (let elem of input2) {
    if (elem !== " ") {
        ans += elem
    }
}

console.log(ans)