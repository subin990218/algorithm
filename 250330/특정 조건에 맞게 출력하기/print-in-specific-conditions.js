const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let ans = []

for (let i = 0; i < 100; i += 1) {
    if (input[i] === 0) {
        break
    } 
    if (input[i]%2===0) {
        ans.push((input[i]/2).toFixed(0))
    } else {
        ans.push(input[i]+3)
    }
}


console.log(ans.join(" "))