const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let index = 'A'.charCodeAt()

let str = ``

for (let i = 0; i < n; i += 1) {
    str = ``
    for (let j = 0; j <= i; j += 1) {
        str += String.fromCharCode(index)
        if (index === 90) {
            index = 'A'.charCodeAt()
        } else {
            index += 1
        }
    }
    console.log(str)
}