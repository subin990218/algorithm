const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let str = ""

for (let i = 0; i<n; i+=1) {
    str = ""
    for (let j = 0; j<=i; j+=1) {
        str += "*"
    }
    console.log(str)
    console.log()
}

for (let i = n; i>1; i-=1) {
    str = ""
    for (let j = 1; j<i; j+=1) {
        str += "*"
    }
    console.log(str)
    console.log()
}