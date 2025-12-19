const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// i < j < k 이고 Ai <= Aj <= Ak 인 (i, j, k) 쌍의 개수
if (n < 3) {
  console.log(0);
  process.exit(0);
}

// dp2[i]: i에서 끝나는 길이 2 (j<i, Aj<=Ai) 부분수열 개수
// dp3[i]: i에서 끝나는 길이 3 (i<j<k, Ai<=Aj<=Ak) 부분수열 개수
const dp2 = Array(n).fill(0);
const dp3 = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] <= arr[i]) {
      dp2[i] += 1;        // (j, i)
      dp3[i] += dp2[j];   // (.., j) + i
    }
  }
}

let ans = 0;
for (let i = 0; i < n; i++) ans += dp3[i];

console.log(ans);
