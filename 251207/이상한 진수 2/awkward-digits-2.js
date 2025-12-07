const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];


let maxVal = -1;

for (let i = 0; i < a.length; i++) {

  const flipped = (a[i] === '0') ? '1' : '0';
  const candidate = a.slice(0, i) + flipped + a.slice(i + 1);


  if (candidate.length > 1 && candidate[0] === '0') continue;

  const value = parseInt(candidate, 2); 
  if (value > maxVal) maxVal = value;
}

console.log(maxVal.toString());
