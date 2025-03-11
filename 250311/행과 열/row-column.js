const fs = require("fs")
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let str = ""

for (let i = 1; i <= 4; i += 1 ){
    str = ``
    for (let j = 1; j <= 5; j += 1) {
        str += `${i*j} ` 
    }
    console.log(str)
}