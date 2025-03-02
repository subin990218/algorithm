const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let str = ""

for (let i=0; i<n; i+=1) {
    if (i%2==0) {
        console.log("*")
    } else {
        
            str += "* * "
        
        console.log(str)
    }
}