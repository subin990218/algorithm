const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = input[10]
let no = true;

for (let i = 0; i < 10; i += 1) {
    let len = input[i].length
    if (input[i][len-1] === n) {
        no = false
        console.log(input[i])
    }
}

if (no === true) {
    console.log("None")
}