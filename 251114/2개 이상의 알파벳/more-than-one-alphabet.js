const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

function isSameCharacter(word) {
    let characterList = [];
    for (let elem of word) {
        if (characterList.length == 0) {
            characterList.push(elem)
        } else {
            for (let character of characterList) {
                if (elem !== character) {
                    characterList.push(elem)
                }
            }
        }
    }
    if (characterList.length > 1) {
        return "Yes"
    } else {
        return "No"
    }
}

let answer = isSameCharacter(A)

console.log(answer)