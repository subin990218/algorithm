const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number)
let cnt = 0
for (let i = 0; i <= 9; i += 1) {
    let x = Number(input[i]);
    if (x % 2 === 1) {
        cnt++;
    }
}

console.log(cnt)