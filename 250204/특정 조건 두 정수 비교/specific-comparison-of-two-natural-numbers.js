let fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let ans1
let ans2


if (a<b) {
    ans1 = 1
}
else {
    ans1 = 0
}

if (a===b) {
    ans2 = 1
}
else {
ans2 = 0
}

console.log(ans1, ans2)

