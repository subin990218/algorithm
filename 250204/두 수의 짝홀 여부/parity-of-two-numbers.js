let fs = require("fs");
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

if (a % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}

if (b % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}

