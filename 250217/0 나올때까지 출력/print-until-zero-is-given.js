const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n").map(Number)


let index = 0

while (true) {
    ans = input[index]
    if (ans == 0) {
        break
    } else {
        console.log(ans)
        index += 1
    }
}