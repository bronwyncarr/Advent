const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(dataPath, "utf-8").split("\n\n");



cleaned = data.map(element => element.replace(/\n/gi, ""))

total = 0;
cleaned.map(element => {
  set = new Set(element.split(""))
  total = total + set.size
})

console.log(total)

// part 2 IN PROGRESS!!!

newTotal = 0
data.map(element => {
  howManyInGroup = (element.split("").filter(el => el === "\n").length) + 1

  withoutNs = element.replace(/\n/gi, "")

  innerString = withoutNs.split("") 
  for (let letter in innerString) { 

  }
})
