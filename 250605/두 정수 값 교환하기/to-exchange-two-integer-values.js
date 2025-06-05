const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
// Please write your code here.

function change(a,b) {
    [b, a] = [a, b]
    console.log(a, b)
}

change(n, m)