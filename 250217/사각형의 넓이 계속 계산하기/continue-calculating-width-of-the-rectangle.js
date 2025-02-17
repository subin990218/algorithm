const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let index = 0


while (true) {
    let arr = input[index].split(" ")
    let a = Number(arr[0])
    let b = Number(arr[1])
    let c = arr[2]
    console.log(a*b)
    if (c == "C") {
        break
    }
    index += 1
}
