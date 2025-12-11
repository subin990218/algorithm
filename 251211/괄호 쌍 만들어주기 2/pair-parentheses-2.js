const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

let openCount = 0; 
let answer = 0;

for (let i = 0; i < A.length; i++) {
  if (A[i] === '(') {
    openCount++;
  }

  if (i + 1 < A.length) {
    const pair = A[i] + A[i + 1];

    if (pair === "((" || pair === "))") {
      answer += openCount;
    }
  }
}

console.log(answer.toString());
