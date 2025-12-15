const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// 각 숫자를 자릿수 배열로 변환 (역순으로 저장 - 일의 자리가 index 0)
function toDigits(num) {
    if (num === 0) return [0];
    const digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    return digits;
}

// 3개의 숫자를 더할 때 carry가 발생하는지 확인
function hasCarry(a, b, c) {
    const da = toDigits(a);
    const db = toDigits(b);
    const dc = toDigits(c);
    const maxLen = Math.max(da.length, db.length, dc.length);
    
    for (let i = 0; i < maxLen; i++) {
        const sum = (da[i] || 0) + (db[i] || 0) + (dc[i] || 0);
        if (sum >= 10) return true;
    }
    return false;
}

let maxSum = -1;

// 모든 3개 조합 탐색
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            if (!hasCarry(arr[i], arr[j], arr[k])) {
                const sum = arr[i] + arr[j] + arr[k];
                if (sum > maxSum) {
                    maxSum = sum;
                }
            }
        }
    }
}

console.log(maxSum);