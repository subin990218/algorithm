const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function even_and_five(a) {
    if (a%2 !== 0) {
        return "No"
    } else {
        let sum = 0;
        for (let elem of String(a)) {
            sum += Number(elem);
        }

        if (sum % 5 === 0) return "Yes";
        return "No";
    }
}

console.log(even_and_five(n))