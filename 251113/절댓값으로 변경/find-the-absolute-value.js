const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

function makeAns(before) {
    if (before < 0) {
        before *= -1
    }
    return before
}

const ans = arr.map((num) => makeAns(num))

for (let elem of ans) {
    process.stdout.write(elem + " ")
}