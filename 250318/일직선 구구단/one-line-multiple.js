const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())


for (let i = 1; i <= n; i += 1) {

    for (let j = 1; j <= n; j += 1) {
        console.log(`${i} * ${j} = ${i*j}`) 
    }
}