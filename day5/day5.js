const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(dataPath, "utf-8").split("\n");

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

// convert to binary, slice, convert to dec, multiply, find the largest
