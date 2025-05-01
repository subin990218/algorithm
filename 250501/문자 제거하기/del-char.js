const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let str = input[0].split("")

for (let i = 1; i < input.length; i += 1) {
    let n = Number(input[i])
    if (str.length !== 1) {
    if (n > str.length - 1) {
        str[str.length - 1] = ""
    } else {
    str[n] = ""
    }
    console.log(str.join(""))
    }
}
