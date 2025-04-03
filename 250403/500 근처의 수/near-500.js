const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let max499 = 0;
let min501 = 1000

for (let elem of input) {
    if (elem > 500) {
        if (elem < min501) {
            min501 = elem
        }
    } else {
        if (elem > max499) {
            max499 = elem
        }
    }
}

console.log(max499, min501)
