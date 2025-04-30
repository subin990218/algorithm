const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let [s,q] = input[0].split(" ")
let ans = s.split("")

for (let i = 1; i <= q; i += 1) {
    let [num, a, b] = input[i].split(" ")
    num = Number(num)
    if (num === 1) {
        a = Number(a)
        b = Number(b)
        let tmp = ans[a-1]
        ans[a-1] = ans[b-1]
        ans[b-1] = tmp
    } else if (num === 2) {
        for (let j = 0; j < ans.length; j += 1) {
            if (ans[j] === a) {
                ans[j] = b
            }
        }
    }
    console.log(ans.join(""))
}

