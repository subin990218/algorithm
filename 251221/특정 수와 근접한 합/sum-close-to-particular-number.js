const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// 전체 합에서 2개를 빼서 남은 합을 만들면 됨
const total = arr.reduce((acc, v) => acc + v, 0);

let ans = Infinity;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const remainSum = total - arr[i] - arr[j];
    const diff = Math.abs(s - remainSum);
    if (diff < ans) ans = diff;
  }
}

console.log(ans);
