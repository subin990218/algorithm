const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const INT_MAX = Number.MAX_SAFE_INTEGER;
// Please Write your code here.

let minDist = INT_MAX;
function findMinDist(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        let nowDist = 0;
        for (let j = 0; j < arr.length; j += 1) {
            nowDist += arr[j] * Math.abs(j-i)
        }

        if (nowDist < minDist) {
            minDist = nowDist
        }
    }
    return minDist
}

console.log(findMinDist(arr))