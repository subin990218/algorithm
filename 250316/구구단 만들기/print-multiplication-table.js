const fs = require("fs")

let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let str = ``

for (let i = 1; i <= 9; i += 1) {
    str = ``
    for (let j = b; j >=a; j -= 2 ) {
        str += `${j} * ${i} = ${j*i}`
        if (j !== a) {
            str += ` / `
        }
    }
    console.log(str)
}