// get data
const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "input.txt");

// clean data
let data = fs.readFileSync(dataPath, "utf-8")
data = data.split("\n")
let cleaned = data.map((option) => option.split(" bags contain "))

// newArray = []
for (i = 0; i< 100; i++) {
    options = cleaned[i][1]   

    
    }


// data = data.replace(/ bags contain/gi, " ").replace(/ bags./gi, " ").replace(/ bag/gi, "").replace(/ [0-9] /gi, ", ").replace(/ ,/gi, ",").replace(/,,/gi, ",")
// data = data;
//
console.log(cleaned)
bags = [ ]

//Shiny Gold
// targetColor = 'shiny gold'
// data.forEach((bag) => {
//     if (bag.includes('shiny gold')) {
//         bags.push(bag)
//     }
// }
// )

// for(i = 0; i < 50; i++)
//     data.forEach((bag) => {
//         if (bag.includes(bags)) {
//             bags.push(bag)
//         }
//     }
// )



debugger;