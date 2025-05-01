const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split("\n")
let aLen = a.length
let bLen = b.length
let flag = true

while (flag === true) {
    for (let i = 0; i < aLen - bLen + 1; i += 1) {
        if (a.slice(i, i+bLen) === b) {
            a = a.slice(0,i) + a.slice(i+bLen)
            aLen -= bLen
            break
        } 
        if (i === aLen - bLen) {
            flag = false
        }
    }
}

console.log(a)
