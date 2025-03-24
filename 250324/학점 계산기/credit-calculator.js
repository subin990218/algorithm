const fs = require("fs")

let input1 = fs.readFileSync(0).toString().trim().split("\n")
let input = input1[1].split(" ").map(Number)
let n = Number(input1[0])
let sumVal = 0
for (let elem of input) {
    sumVal += elem
}
let pyeonggyun = (sumVal/n).toFixed(1)
console.log(pyeonggyun)
if (pyeonggyun >= 4.0) {
    console.log("Perfect")
} else if (pyeonggyun >= 3.0) {
    console.log("Good")
} else {
    console.log("Poor")
}