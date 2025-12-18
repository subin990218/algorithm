const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input.slice(0, 19).map(row => row.split(' ').map(Number));

// 방향 벡터: 우, 하, 우하대각선, 우상대각선
const directions = [
  [0, 1],   // 가로
  [1, 0],   // 세로
  [1, 1],   // 대각선 \
  [-1, 1]   // 대각선 /
];

function checkWin(row, col, color) {
  for (const [dr, dc] of directions) {
    let count = 1;
    let positions = [[row, col]];
    
    // 정방향 체크
    let nr = row + dr;
    let nc = col + dc;
    while (nr >= 0 && nr < 19 && nc >= 0 && nc < 19 && arr[nr][nc] === color) {
      count++;
      positions.push([nr, nc]);
      nr += dr;
      nc += dc;
    }
    
    // 역방향 체크
    nr = row - dr;
    nc = col - dc;
    while (nr >= 0 && nr < 19 && nc >= 0 && nc < 19 && arr[nr][nc] === color) {
      count++;
      positions.unshift([nr, nc]);
      nr -= dr;
      nc -= dc;
    }
    
    // 정확히 5개인지 확인 (6목 제외)
    if (count === 5) {
      // 가로 방향(dr=0, dc=1): 가장 왼쪽 (열 번호가 가장 작은)
      // 세로 방향(dr=1, dc=0): 가장 위쪽 (행 번호가 가장 작은)
      // 대각선 \(dr=1, dc=1): 가장 왼쪽 위
      // 대각선 /(dr=-1, dc=1): 가장 왼쪽 아래
      
      positions.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1]; // 열 우선 정렬
        return a[0] - b[0]; // 같으면 행 정렬
      });
      
      return [positions[0][0] + 1, positions[0][1] + 1]; // 1-based 인덱스
    }
  }
  
  return null;
}

let winner = 0;
let winPos = null;

// 전체 보드 탐색
for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    if (arr[i][j] !== 0) {
      const result = checkWin(i, j, arr[i][j]);
      if (result) {
        winner = arr[i][j];
        winPos = result;
        break;
      }
    }
  }
  if (winner !== 0) break;
}

console.log(winner);
if (winner !== 0) {
  console.log(`${winPos[0]} ${winPos[1]}`);
}