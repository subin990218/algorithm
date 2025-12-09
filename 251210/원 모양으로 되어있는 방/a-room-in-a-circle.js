const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let answer = Infinity;

// start : 처음에 모든 사람이 모여있는 방 번호(0 ~ n-1)
for (let start = 0; start < n; start++) {
  let total = 0;

  // room : 최종적으로 사람이 있어야 하는 방 번호
  for (let room = 0; room < n; room++) {
    // start에서 room까지 반시계 방향 거리
    const dist = (room - start + n) % n;
    total += dist * arr[room];
  }

  if (total < answer) answer = total;
}

console.log(answer.toString());
