const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

let ans = 0

function findSosu(x) {
    for (let i = 2; i < x; i += 1) {
        if (x % i === 0) {
            return
        } 
    }
    ans += x
}

for (let a = A; a <= B; a += 1) {
    findSosu(a)
}

console.log(ans)