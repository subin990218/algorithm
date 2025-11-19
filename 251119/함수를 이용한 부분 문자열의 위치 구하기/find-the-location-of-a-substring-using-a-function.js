const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.

function findText() {
    for (let i = 0; i <= text.length - pattern.length; i += 1) {
        for (let j = 0; j < pattern.length; j += 1) {
            if (text[i + j] !== pattern[j]) {
                break
            } else {
                if (j === pattern.length - 1) {
                    return i
                }
            }
        }
    }
    return -1
}

console.log(findText())