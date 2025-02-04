const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n");

let [mathA, engA] = input[0].split(" ").map(Number);
let [mathB, engB] = input[1].split(" ").map(Number);

if (mathA > mathB && engA > engB) {
    console.log(1);
}
else {
    console.log(0);
}
