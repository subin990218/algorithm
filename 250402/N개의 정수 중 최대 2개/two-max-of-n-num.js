const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])

let arr = input[1].toString().trim().split(" ").map(Number)

let maxVal = Number.MIN_SAFE_INTEGER;
let secondVal = Number.MIN_SAFE_INTEGER;

for (let elem of arr) {
    if (elem > maxVal) {
        secondVal = maxVal;
        maxVal = elem;
    } else if (elem > secondVal && elem < maxVal) {
        secondVal = elem;
    }
}