const fs = require("fs")

let [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let star = ""

for (let i = 0;i<n; i+=1) {
    star = ""
    for (let j=0;j<m;j+=1) {
        star += "* "
    }
    console.log(star)
}