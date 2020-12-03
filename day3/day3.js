// Get Data
const fs = require('fs');
const data = fs.readFileSync("input.txt", "utf-8");
const splitData = data.split("\n");

// Declare variables to be reused
let x = 3;
let y = 1;
let num = Math.ceil(splitData.length/splitData[0].length * (x/y));
let concatyData = [];

function concaty(splitData) {
    for (let element of splitData) {
        let newElement = "";
        for(a = 0; a < num; a++) {
            newElement = newElement + element;
        }
        concatyData.push(newElement);
    }
    return concatyData;    
}
concaty(splitData);

let calculateTrees = (concatyData, x, y) => {
    let j = 0;
    let total = 0;
    for (i = (0+y); i < concatyData.length; i = i + y) {
        if (concatyData[i][j+x] === '#') {
            total++
        }
        j = j + x;
    }   
    console.log(total)
}

calculateTrees(concatyData, x, y)


