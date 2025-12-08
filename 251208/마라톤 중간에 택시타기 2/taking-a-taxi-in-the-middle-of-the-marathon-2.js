const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let idx = 0;
const N = input[idx++];

const xs = [];
const ys = [];
for (let i = 0; i < N; i++) {
  xs.push(input[idx++]);
  ys.push(input[idx++]);
}

function dist(i, j) {
  return Math.abs(xs[i] - xs[j]) + Math.abs(ys[i] - ys[j]);
}

let total = 0;
for (let i = 0; i < N - 1; i++) {
  total += dist(i, i + 1);
}

let answer = Infinity;

for (let i = 1; i <= N - 2; i++) {
  const removed =
    total
    - dist(i - 1, i)
    - dist(i, i + 1)
    + dist(i - 1, i + 1);
  if (removed < answer) answer = removed;
}

console.log(answer);
