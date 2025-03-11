const fs = require("fs")
let [a, b] = fs.readFileSync(0).toString().trim().map(Number)

let str = ""

for (let i = 1; i <= n; i += 1 ){
    str = ``
    for (let j = 1; j <= n; j += 1) {
        str += `${i*j} ` 
    }
    console.log(str)
}