const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

// function findBiggestNum(arr) {
//     if (arr.length === 1) {
//         let biggestNumber = arr.pop()
//         return biggestNumber
//     }
    
//     if (findBiggestNum())
// }

function maxValue(a) {
    if (a === 0) return arr[0];

    return Math.max(maxValue(a - 1), arr[a]);
}

console.log(maxValue(n - 1));