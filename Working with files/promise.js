import fs from "fs/promises"


// i can directly use await since i am inside a module
let a = await fs.readFile("harry.txt")
// console.log(a.toString());
let b = await fs.appendFile("harry.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(),b);
