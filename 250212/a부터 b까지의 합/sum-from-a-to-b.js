const fs = require('fs');
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);


let sum = 0;

for(i = a; i <= b; i++) {
        sum += i;
}

console.log(sum);