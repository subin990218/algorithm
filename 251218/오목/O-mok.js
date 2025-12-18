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
    
    // 정방향 체크
    let nr = row + dr;
    let nc = col + dc;
    while (nr >= 0 && nr < 19 && nc >= 0 && nc < 19 && arr[nr][nc] === color) {
      count++;
      nr += dr;
      nc += dc;
    }
    
    // 역방향 체크
    nr = row - dr;
    nc = col - dc;
    while (nr >= 0 && nr < 19 && nc >= 0 && nc < 19 && arr[nr][nc] === color) {
      count++;
      nr -= dr;
      nc -= dc;
    }
    
    // 정확히 5개인지 확인 (6목 제외)
    if (count === 5) {
      // 가장 왼쪽 또는 위쪽 돌의 위치 찾기
      let startRow = row;
      let startCol = col;
      
      // 역방향으로 가장 시작점 찾기
      while (true) {
        const prevRow = startRow - dr;
        const prevCol = startCol - dc;
        if (prevRow >= 0 && prevRow < 19 && prevCol >= 0 && prevCol < 19 && arr[prevRow][prevCol] === color) {
          startRow = prevRow;
          startCol = prevCol;
        } else {
          break;
        }
      }
      
      return [startRow + 1, startCol + 1]; // 1-based 인덱스
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