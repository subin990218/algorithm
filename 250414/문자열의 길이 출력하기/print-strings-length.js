const fs = require("fs");
let givenInput = fs.readFileSync(0).toString().trim().split("\n");

let input1 = givenInput[0]
let input2 = givenInput[1]

console.log(input1.length + input2.length)
