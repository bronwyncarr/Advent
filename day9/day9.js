//Part A
//Plan
// 
// all values into an array, convert to numbers
// have a pointer starting at 25
// while loop true
// nested loop of a and b to find two numbers in that add to poimter value
// if so pointer + 1 if not false
// 

// get data
const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "input.txt");

// clean data
let data = fs.readFileSync(dataPath, "utf-8")
stringData = data.split("\n")
data = stringData.map(string => parseInt(string))

// Part A
pointer = 25;
let isItValid = true;
lastNumbers = []

while (isItValid) {
    isItValid = false;
    for (i = (pointer - 25); i< pointer; i++) {
        for (j = (pointer - 24); j < pointer; j++) {
            if ((data[i] + data[j]) === data[pointer]) {
                pointer ++
                isItValid = true;
                break;
            }
        }
    }
}
console.log(data[pointer])

console.log(pointer)

//Part B
const reducer = (accumulator, currentValue) => accumulator + currentValue;

for (a = 0; a < 555; a++) {
    let total = 0;
    let arrOfNums = [];
    k = a;
    while (total < data[pointer]) {
        arrOfNums.push(data[k]);
        total = arrOfNums.reduce(reducer, 0);
        if (total === data[pointer]) {
            const min = Math.min(...arrOfNums)
            const max = Math.max(...arrOfNums)
            console.log(min + max)
            break;
        }
        k++;
    }
}
    