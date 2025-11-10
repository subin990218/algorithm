const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
// y가 긴 쪽
function isPartOf(x, y) {
    for (let i = 0; i < y.length - x.length + 1; i += 1) {
        for (let j = 0; j < x.length; j += 1) {
            if (x[j] !== y[i+j]) {
                break
            } else {
                if (j === x.length - 1) {
                    return "Yes"
                } else {
                    continue
                }
            }
        }
    }
    return "No"
}

console.log(isPartOf(b, a))