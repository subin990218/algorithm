const fs = require("fs");
let givenStr = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(givenStr[1])
let arr = givenStr[0].split("")
arr = arr.reverse()

console.log(arr.slice(0, n).join(""));