const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let str = ""

for (let i = 0; i < n; i += 1) {
    str = ""
    for (let j = 0; j < n; j += 1) {
        if (j % 2 === 0) {
            if (i === 0) {
                str += "* "
            } else {
                str += "  "
            }
        }
        else {
            if (j>=i) {
                str += "* "
            } else {
                str += "  "
            }
        }
    }
    console.log(str)
}