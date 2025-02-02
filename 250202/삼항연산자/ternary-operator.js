const fs = require("fs");
let score = Number(fs.readFileSync(0).toString().trim())

let ans = score == 100 ? "pass" : "failure"

console.log(ans)
