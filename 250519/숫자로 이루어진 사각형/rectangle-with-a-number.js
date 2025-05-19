const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please write your code here.

let tmp = 1

function printNumberRectangle(n) {

for (let i = 0; i < n; i += 1) {
    let str = ``
    for (let j = 0; j < n; j += 1) {
        str += `${tmp} `
        if (tmp === 9) {
            tmp = 1
        } else {
        tmp += 1
        }
    }
    console.log(str)
}
}

printNumberRectangle(n)
