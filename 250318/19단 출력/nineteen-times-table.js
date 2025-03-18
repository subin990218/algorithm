let str = ``

for (let i = 1; i <= 19; i += 1) {
    for (let j = 1; j <= 19; j += 1) {
        if (j%2 !== 0) {
            if (j === 19) {
                str += `${i} * ${j} = ${i*j}\n`
            } else {
                str += `${i} * ${j} = ${i*j} / `
            }
        } else {
            str += `${i} * ${j} = ${i*j}\n`
        }
    }
}

console.log(str)