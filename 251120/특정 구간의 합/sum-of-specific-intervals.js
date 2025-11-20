const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.

function plusQueriesIndex(a, b) {
    let ans = 0
    for (let i = a-1; i <= b-1; i += 1) {
        ans += A[i]
    }
    return ans
}

for (let elem of queries) {
    const [x, y] = elem;
    console.log(plusQueriesIndex(x, y))
}