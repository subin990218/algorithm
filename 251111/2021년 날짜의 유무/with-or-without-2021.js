const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

function maxDay(m) {
    if (m === 1 || m === 3 || m ===5 || m === 7 || m ===8 || m ===10 || m ===12) {
        return 31
    } else if (m === 2) {
        return 28
    } else {
        if (m < 12) {
            return 30
        } else {
            return 0
        }
    }
}

function isValidDate(m, d) {
    if (maxDay(m)>= d) {
        return "Yes"
    } else {
        return "No"
    }
}

console.log(isValidDate(m,d))