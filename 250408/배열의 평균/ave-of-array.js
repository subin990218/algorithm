const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let arr = []

for (let i = 0; i < 2; i += 1) {
    arr.push(input[i].split(" ").map(Number))
}
let garo = ``
let saero = ``
let all = 0

for (let i = 0; i < 2; i += 1) {
    let garoSum = 0
    for (let j = 0; j < 4; j += 1) {
        garoSum += arr[i][j]
        all += arr[i][j]
    }
    garo += `${(garoSum/4).toFixed(1)} `
}

for (let j = 0; j < 4; j += 1) {
    let saeroSum = 0
    for (let i = 0; i < 2; i += 1 ) {
        saeroSum += arr[i][j]
    }
    saero += `${(saeroSum/2).toFixed(1)} `
}

console.log(garo)
console.log(saero)
console.log((all/8).toFixed(1))