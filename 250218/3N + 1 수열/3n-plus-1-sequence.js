const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let ans = 0

while (true) {
    if (n == 1) {
        break
    } else if (n % 2 ==0) {
        n /= 2
    } else {
        n = n*3 +1
    }
    ans += 1
}

console.log(ans)