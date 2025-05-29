const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

function plus(x,y) {
    return `${x} + ${y} = ${x+y}`
}

function minus(x,y) {
    return `${x} - ${y} = ${x-y}`
}

function divide(x,y) {
    return `${x} / ${y} = ${parseInt(x/y)}`
}

function gobhagi(x,y) {
    return `${x} * ${y} = ${x*y}`
}

if (o === '+') {
    console.log(plus(a,c))
} else if (o === '-') {
    console.log(minus(a,c))
} else if (o === '/') {
    console.log(divide(a,c))
} else if (o === '*') {
    console.log(gobhagi(a,c))
} else {
    console.log('False')
}