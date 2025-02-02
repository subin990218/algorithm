const fs = require("fs")

const input = fs.readFileSync(0).toString().trim();
let [h, w] = input.split(" ").map(Number);

let b = (10000*w)/(h**2)

let result = parseInt(b)

console.log(result)
if (result>= 25) {
    console.log("Obesity")
}