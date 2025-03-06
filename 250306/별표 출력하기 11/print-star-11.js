const fs = require("fs")

let n = Number(fs.readFileSync(0).toString().trim())

let str = "";

for (let i = 0; i < 3 + (n-1)*2; i++) {
    str = "";
    for (let j = 0; j < 3 + (n-1)*2; j++) {

        if (i % 2 === 0 || j % 2 === 0) {
            str += "* ";
        }
        else {
            str += "  ";
        }
    }
    console.log(str);
}