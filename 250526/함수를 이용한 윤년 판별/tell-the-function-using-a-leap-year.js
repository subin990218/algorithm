const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const y = Number(input[0]);
// Please Write your code here.

function findYoonYear(year) {
if (year%100 === 0 && year%400 !== 0) {
            return false
        } else {
            if (year%4 === 0) {
                return true
            } else {
                return false
            }
        }
}

console.log(findYoonYear(y))