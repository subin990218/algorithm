const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let str = ""

for (let i = 0; i<n; i+=1) {
    str = ""
    for (let j = 0;j<n-i-1; j+=1) {
        str += "  "
    }
    for (let j = 0; j<2*i+1; j+=1) {
        str += "* "
    }
    console.log(str)
}