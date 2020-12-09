// Part A

// Plan
// have a pointer value,
// access instruction in instructions
// based on acc, nop jmp in [0] move as many places as [1]
// adjust pointer accordingly
// add a pointer position to an array as long as the array does not alrady contain that value, once it does, return that value.


// get data
const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "input.txt");

// clean data
let data = fs.readFileSync(dataPath, "utf-8")
data = data.split("\n")

// instructions = data.map(element => {
//     element = element.split(" ")
//     element[1] = parseInt(element[1])
//     return element
// })

instructions = data.map(element => {
    const [direction, stringAmount] = element.split(" ")
    amount = parseInt(stringAmount)
    return [direction, amount]
})

let position = 0;
let allFoundPositions = []
let accumulator = 0

while (!allFoundPositions.includes(position)) {
    allFoundPositions.push(position)
    debugger;
    switch(instructions[position][0]) {
        case "acc":
            accumulator = accumulator + instructions[position][1]
            position ++
            break;
        case "jmp":
            position = position + instructions[position][1]
            break;
        case "nop":
            position ++
            break;
    }
}

console.log(accumulator)
