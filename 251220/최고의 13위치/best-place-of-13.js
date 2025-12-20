const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1).map(line => line.trim().split(' ').map(Number));

let count = 0;

// 가로 방향 체크
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - 3; j++) {
        const set = new Set([arr[i][j], arr[i][j+1], arr[i][j+2]]);
        // 연속된 3개가 1, 2, 3을 모두 포함하는지 확인
        if (set.size === 3 && set.has(1) && set.has(2) && set.has(3)) {
            count++;
        }
    }
}

// 세로 방향 체크
for (let i = 0; i <= n - 3; i++) {
    for (let j = 0; j < n; j++) {
        const set = new Set([arr[i][j], arr[i+1][j], arr[i+2][j]]);
        // 연속된 3개가 1, 2, 3을 모두 포함하는지 확인
        if (set.size === 3 && set.has(1) && set.has(2) && set.has(3)) {
            count++;
        }
    }
}

console.log(count);