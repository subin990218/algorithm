const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 초기 윈도우 합
let sum = 0;
for (let i = 0; i < k; i++) sum += arr[i];

let maxSum = sum;

// 슬라이딩 윈도우
for (let i = k; i < n; i++) {
  sum += arr[i] - arr[i - k];
  if (sum > maxSum) maxSum = sum;
}

console.log(maxSum);
