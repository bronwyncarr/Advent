const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf-8");
let cleaned = data.split("\n\n");

const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

foundInvalid = 0;

//Part 1 first go:

// for (let passport of cleaned) {
//     if (passport.includes("byr")
//     && passport.includes("iyr")
//     && passport.includes("eyr")
//     && passport.includes("hgt")
//     && passport.includes("hcl")
//     && passport.includes("ecl")
//     && passport.includes("pid")) {
//         foundValid ++
//     }
//     console.log(foundValid)
// }

// Part 1 second go:

// for (let passport of cleaned) {
//     for (let field of fields) {
//         if (!(passport.includes(field))) {
//             foundInvalid++;
//         }
//     }
// }
// console.log(foundInvalid)
// console.log(cleaned.length - foundInvalid)


// Part 2




    for (let passport of cleaned) {
        passport.replace(/:/gi, " ");
    }
    return cleaned



arr = cleaned[0].split(" ")

console.log(semicolan[0])
console.log(arr)




