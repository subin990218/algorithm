const fs = require("fs")

let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let ans = false;

for (let i = a; i <=b; i +=1) {
    if (i%c==0) {
        ans = true;
        break
    } 
}

if (ans == true) {
    console.log("NO")
} else {
    console.log("YES")
}