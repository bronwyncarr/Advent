const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(dataPath, "utf-8").split("\n");

//Part 1
// convert to binary, slice, convert to dec, multiply, find the largest
const binaryData = data.map((element) => {
  return element.replace(/B|R/g, 1).replace(/F|L/g, 0);
});

const row = binaryData.map((element) => {
    let rowNum = element.slice(0, 7);
    return parseInt(rowNum, 2);
  });

const seat = binaryData.map((element) => {
    let seatNum = element.slice(7, 10);
    return parseInt(seatNum, 2);
});

let total = []
for (i = 0; i < binaryData.length; i++) {
    total.push(row[i] * 8 + seat[i])
}

console.log(Math.max(...total));



// Part 2
// sort array, find missing number
// let sortedTotal = total.sort(function(a, b){return a - b});

// for (i = 48; i < 818; i++) {
//   if (!sortedTotal.includes(i)) {
//     console.log(i)
//     break;
//   }
// }

// OR

for (i = Math.min(...total); i < 818; i++) {
  if (!total.includes(i)) {
    console.log(i)
    break;
  }
}

