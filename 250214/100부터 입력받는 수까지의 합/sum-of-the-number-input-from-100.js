const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let ans = 0;

for (i=n; i <=100; i+=1) {
    ans += i
}

console.log(ans)