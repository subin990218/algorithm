const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let index = 'A'.charCodeAt()
let zIndex = 'Z'.charCodeAt()

let str = ``

for (let i = 0; i < n; i += 1) {
    str = ``
    for (let j = 0; j < n; j += 1) {
        if (i>j) {
            str += `  `
        } else {
            str += String.fromCharCode(index) + ` `
            if (index === zIndex) {
                index = 'A'.charCodeAt()
            } else {
                index += 1
            }
        }
    }
    console.log(str)
}