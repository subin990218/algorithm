const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.const fs = require('fs');

let ans = 0;

const startColor = grid[0][0];
const endColor = grid[R - 1][C - 1];

// A = (ar, ac), B = (br, bc)
for (let ar = 1; ar <= R - 2; ar++) {
  for (let ac = 1; ac <= C - 2; ac++) {
    // 시작 → A 색 조건
    if (grid[ar][ac] === startColor) continue;

    for (let br = ar + 1; br <= R - 2; br++) {
      for (let bc = ac + 1; bc <= C - 2; bc++) {
        const colorA = grid[ar][ac];
        const colorB = grid[br][bc];

        // A → B, B → 끝 색 조건
        if (colorA === colorB) continue;
        if (colorB === endColor) continue;

        ans++;
      }
    }
  }
}

console.log(ans);
