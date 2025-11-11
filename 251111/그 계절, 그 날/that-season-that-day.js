const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.

function findYoonYear(y, m, d) {
    if (y % 4 === 0) {
        if (y % 100 === 0) {
            if (y % 400 === 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}

function maxDay(y, m, d) {
    if (m === 1 || m === 3 || m ===5 || m === 7 || m ===8 || m ===10 || m ===12) {
        return 31
    } else if (m === 2) {
        if (findYoonYear(y,m,d) === true) {
            return 29
        } else {
            return 28
        }
    } else {
        if (m < 12) {
            return 30
        } else {
            return 0
        }
    }
}


function findAnswer (y, m, d) {
    if (maxDay(y,m,d) < d) {
        return -1
    } else {
        if (m > 11) {
            return "Winter"
        } else if (m > 8) {
            return "Fall"
        } else if (m > 5) {
            return "Summer"
        } else if (m > 2) {
            return "Spring"
        } else {
            return "Winter"
        }
    }
}

console.log(findAnswer(year,month,day))