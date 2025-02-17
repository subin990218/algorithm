const fs = require("fs")

let a = Number(fs.readFileSync(0).toString().trim())

let ans = ""

for (let i = 1; i <=a; i += 1) {
    if ((i%2==0 && i%4!==0) || parseInt(i/8) %2 == 0 || (i%7)<4) {
        continue
    } else {
        ans += i + " "
    }

}

console.log(ans)