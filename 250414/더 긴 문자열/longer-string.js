const fs = require("fs");
let givenInput = fs.readFileSync(0).toString().trim().split(" ");

let input1 = givenInput[0]
let input2 = givenInput[1]

if (input1.length === input2.length) {
    console.log("same")
} else if (input1.length > input2.length) {
    console.log(input1, input1.length)
} else {
    console.log(input2, input2.length)
}