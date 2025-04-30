const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("")

let result = "";

for (let i = 0; i < input.length; i+=1) {
    if (i !== 1 && i !== input.length - 2) {
        result += input[i];
    }
}

console.log(result);