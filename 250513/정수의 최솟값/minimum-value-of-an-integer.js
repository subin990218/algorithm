const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.

function add (a, b, c = 0) {
    let minimum = 100
    if (a <= b && a <= c) {
        minimum = a
    } else if (b <= a && b <= c) {
        minimum = b
    } else {
        minimum = c
    }
    console.log(minimum)
}

add(a,b,c)