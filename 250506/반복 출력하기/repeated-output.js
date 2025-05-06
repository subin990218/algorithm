const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function printSomething (n) {
    for (let i = 0; i < n; i += 1) {
        process.stdout.write("12345^&*()_\n")
    }
}

printSomething(n)