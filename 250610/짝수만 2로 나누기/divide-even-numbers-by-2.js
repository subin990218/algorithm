const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

for (let elem of arr) {
    if (elem % 2 === 0) {
        elem /= 2
    }
    process.stdout.write(elem + " ")
}

