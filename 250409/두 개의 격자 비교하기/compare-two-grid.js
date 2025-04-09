const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let [n, m] = input[0].split(" ").map(Number)

let arr = []
for (let a = 1; a < n+1; a += 1) {
    arr.push(input[a].trim().split(" ").map(Number))
}

const arr2 = input.slice(n + 1, 2 * n + 1).map(line => line.split(" ").map(Number));

for (let a = 0; a < n; a += 1) {
    for (let b = 0; b < m; b += 1) {
        arr[a][b] = arr[a][b] === arr2[a][b] ? 0 : 1;
    }
}

for (let row of arr) {
    console.log(row.join(" "))
}

// 별도 배열 선언해서 푸는 방법

// const result = arr1.map((row, i) =>
//   row.map((val, j) => (val === arr2[i][j] ? 0 : 1))
// );

// result.forEach(row => console.log(row.join(" ")));