const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input.map(Number);
// Please Write your code here. 


function jaegob(x,y) {
    return x**y
}

console.log(jaegob(a,b))