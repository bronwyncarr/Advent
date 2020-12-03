// Get Data
const fs = require('fs');
let input = fs.readFileSync("input.txt", "utf-8");


// Unsure of the best wat to extract data.
// Decided to remove :, -, return line then split on a space so the values go into one large array.
// Then seperate into 4 arrays for the first number, end number, letter and string.
// Store 4 arrays in a object

// Get Data
function getInput (input) {
    input = input.replace(/:/gi, "");
    input = input.replace(/-/gi, " ");
    input = input.replace(/\r?\n|\r/gi, " ");
    input = input.split(' ');
    obj = {
        start: [],
        end: [],
        letter: [],
        value:[]
    }
    for(i = 0; i < input.length; i = i + 4) {
        obj.start.push(input[i])  
        obj.end.push(input[i+1])
        obj.letter.push(input[i+2])   
        obj.value.push(input[i+3])  
    }
    return obj
}

let inputArrays = getInput(input)


// Part 1
// splits string on letter to be found into an array and then uses length -1 to get number of occurances.

function partOne (obj) {
    let acceptableOne = 0;
    for(i = 0; i < obj.start.length; i++) {
        let total = obj.value[i].split(obj.letter[i]).length -1
        if ((total >= obj.start[i]) &&  (total <= obj.end[i])) {
            acceptableOne ++
        }
    }
    console.log(acceptableOne)
}

partOne(obj)

// Part 2

function partTwo(obj) {
    let acceptableTwo = 0;
    for(i = 0; i < obj.start.length; i++) {
        if ((obj.value[i].charAt(obj.start[i] -1) !== obj.letter[i]) && (obj.value[i].charAt(obj.end[i] -1) === obj.letter[i]) ||
        (obj.value[i].charAt(obj.start[i] -1) === obj.letter[i]) && (obj.value[i].charAt(obj.end[i] -1) !== obj.letter[i])) {
            acceptableTwo ++
        }
    }
    console.log(acceptableTwo)
}
partTwo(obj)
