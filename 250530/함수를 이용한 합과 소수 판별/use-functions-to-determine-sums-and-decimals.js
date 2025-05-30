const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function ifCondition(j) {
    for (let x = 2; x < j; x += 1) {
            if (j%x === 0) {
                return false
            } else if ((parseInt(j/10)+j%10)%2 !== 0) {
                return false
            }
    }
    return true
}

function findAns(x, y) {
    let ans = 0
    for (let i = x; i <= y; i += 1) {
        if (ifCondition(i)) {
            ans += 1
        }
    }
    return ans
}

console.log(findAns(A,B))
