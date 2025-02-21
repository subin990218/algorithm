const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let star = "";

for (let i = 0; i < n; i +=1) {
    star = ""
    for (let j = 0; j < n - i; j++) {
        star += "* "
    }
    console.log(star)
}