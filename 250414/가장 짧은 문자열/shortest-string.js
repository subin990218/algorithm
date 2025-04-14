const fs = require("fs");
let givenInput = fs.readFileSync(0).toString().trim().split("\n");

let input1 = givenInput[0]
let input2 = givenInput[1]
let input3 = givenInput[2]

let shortest = 100
let longest = 0

for (let elem of givenInput) {
    if (elem.length > longest) {
        longest = elem.length
    } if (elem.length < shortest) {
        shortest = elem.length
    }
}

console.log(longest - shortest)