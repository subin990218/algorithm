const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let arr = input.slice(0, 3).map((val) => val.split(" ").map(Number))
let arr2 = input.slice(4, 7).map((val) => val.split(" ").map(Number))

// let arr = []
// for (let i = 0; i < 3; i += 1) {
// arr.push(input[i].split(" ").map(Number))
// }

let answer = arr.map((row, index) => row.map((elem, index2) => 
    // console.log(`elem: ${elem}, arr2[${index}][${index2}]: ${arr2[index][index2]}`)
    elem * arr2[index][index2]
))


answer.forEach(elem=>console.log(elem.join(" ")))