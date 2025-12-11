const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

let openPair = 0;   // 지금까지 등장한 "((" 패턴 개수
let answer = 0;

for (let i = 0; i < A.length - 1; i++) {
  const pair = A[i] + A[i + 1];

  if (pair === "((") {
    openPair++;
  } else if (pair === "))") {
    answer += openPair;
  }
}

console.log(answer.toString());
