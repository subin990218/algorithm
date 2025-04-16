const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ")
let cnt = 0

input.map((row)=>{cnt += row.length})

console.log(cnt)