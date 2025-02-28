const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let str = ""

for (let i = 0; i<n; i+=1) {
    str = ""
    for (let j=0; j<n-1-i; j+=1) {
        str += "  "
    }
    for (let j=0; j<1+i; j+=1) {
        str += "@ "
    }
    console.log(str)
}

for (let i = 0; i<n; i+=1) {
    str = ""
    for (let j=n-2-i; j>=0; j-=1) {
        str += "@ "
    }
    console.log(str)
}