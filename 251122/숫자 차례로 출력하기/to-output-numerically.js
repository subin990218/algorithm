const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

function printNumberAsc(n) {
    if (n===0) return
    printNumberAsc(n-1)
    process.stdout.write(n + " ")
}

function printNumberDesc(n) {
    if (n===0) return
    process.stdout.write(n + " ")
    printNumberDesc(n-1)
}

printNumberAsc(n)
console.log()
printNumberDesc(n)
