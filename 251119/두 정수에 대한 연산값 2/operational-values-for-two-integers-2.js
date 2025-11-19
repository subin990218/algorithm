const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.

function makeAns(s,l) {
    if (s > l) {
        l += 10;
        s *= 2;
    } else {
        s += 10;
        l *= 2;
    }
    return [s, l]
}

let [small, big] = makeAns(a, b)

console.log(small, big)