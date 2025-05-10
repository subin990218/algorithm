const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.


function findAns (a,b) {
    let ans = 0
    for (let i = a; i < a*b; i += 1) {
        if (i%a === 0 && i%b === 0) {
            ans = i
            break
        }
    }
    console.log(ans)

}

findAns(n, m)